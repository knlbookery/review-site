import { useState, useEffect, useCallback, useRef } from 'react';

interface AudioManagerState {
  isAudioEnabled: boolean;
  isPlaying: boolean;
  audioError: string | null;
  isUserInteracted: boolean;
  isMobile: boolean;
  autoplaySupported: boolean;
  audioContext: AudioContext | null;
}

interface AudioManagerActions {
  enableAudio: () => Promise<void>;
  playAudio: (audioFile: string) => Promise<void>;
  pauseAudio: () => void;
  stopAudio: () => void;
  toggleAudio: () => void;
  setAudioEnabled: (enabled: boolean) => void;
}

export const useAudioManager = (): AudioManagerState & AudioManagerActions => {
  const [state, setState] = useState<AudioManagerState>({
    isAudioEnabled: false,
    isPlaying: false,
    audioError: null,
    isUserInteracted: false,
    isMobile: false,
    autoplaySupported: false,
    audioContext: null,
  });

  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Detect mobile device
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  }, []);

  // Test autoplay support
  const testAutoplaySupport = useCallback(async (): Promise<boolean> => {
    try {
      // Create a silent audio element to test autoplay
      const audio = new Audio();
      audio.volume = 0;
      audio.muted = true;
      audio.preload = 'auto';
      
      // Use a data URL for a very short silent audio
      audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmHgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        audio.pause();
        audio.remove();
        return true;
      }
      
      return false;
    } catch (error) {
      console.log('Autoplay not supported:', error);
      return false;
    }
  }, []);

  // Initialize audio context
  const initializeAudioContext = useCallback(async () => {
    try {
      // Handle webkit prefixes for older browsers
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      
      if (!AudioContextClass) {
        throw new Error('AudioContext not supported');
      }

      const audioContext = new AudioContextClass();
      
      // Resume context if suspended (required for mobile)
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }
      
      audioContextRef.current = audioContext;
      
      setState(prev => ({
        ...prev,
        audioContext,
        audioError: null
      }));
      
      return audioContext;
    } catch (error) {
      console.error('Failed to initialize AudioContext:', error);
      setState(prev => ({
        ...prev,
        audioError: 'Audio system not available'
      }));
      return null;
    }
  }, []);

  // Enable audio after user interaction
  const enableAudio = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, audioError: null }));
      
      // Initialize AudioContext
      await initializeAudioContext();
      
      // Test with a real audio element
      const testAudio = new Audio();
      testAudio.volume = 0.1;
      testAudio.preload = 'auto';
      testAudio.crossOrigin = 'anonymous';
      
      // Use the first slide's audio for testing
      testAudio.src = '/audio/slide-01-intro.mp3';
      
      const playPromise = testAudio.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        testAudio.pause();
        testAudio.currentTime = 0;
      }
      
      setState(prev => ({
        ...prev,
        isAudioEnabled: true,
        isUserInteracted: true,
        audioError: null
      }));
      
    } catch (error) {
      console.error('Failed to enable audio:', error);
      setState(prev => ({
        ...prev,
        audioError: 'Unable to enable audio. Please check your browser settings.'
      }));
    }
  }, [initializeAudioContext]);

  // Play audio file
  const playAudio = useCallback(async (audioFile: string) => {
    if (!state.isAudioEnabled || !state.isUserInteracted) {
      setState(prev => ({
        ...prev,
        audioError: 'Please enable audio first'
      }));
      return;
    }

    try {
      // Stop current audio
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      }

      setState(prev => ({ ...prev, audioError: null }));

      const audio = new Audio();
      audio.preload = 'auto';
      audio.crossOrigin = 'anonymous';
      audio.volume = 0.8;
      audio.src = audioFile;

      // Set up event listeners
      audio.addEventListener('loadstart', () => {
        console.log('Audio loading started:', audioFile);
      });

      audio.addEventListener('canplaythrough', () => {
        console.log('Audio ready to play:', audioFile);
      });

      audio.addEventListener('play', () => {
        setState(prev => ({ ...prev, isPlaying: true }));
      });

      audio.addEventListener('pause', () => {
        setState(prev => ({ ...prev, isPlaying: false }));
      });

      audio.addEventListener('ended', () => {
        setState(prev => ({ ...prev, isPlaying: false }));
      });

      audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        setState(prev => ({
          ...prev,
          audioError: `Failed to load: ${audioFile}`,
          isPlaying: false
        }));
      });

      currentAudioRef.current = audio;

      // Attempt to play
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        await playPromise;
      }

    } catch (error) {
      console.error('Error playing audio:', error);
      setState(prev => ({
        ...prev,
        audioError: 'Playback failed',
        isPlaying: false
      }));
    }
  }, [state.isAudioEnabled, state.isUserInteracted]);

  // Pause current audio
  const pauseAudio = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }
  }, []);

  // Stop current audio
  const stopAudio = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  // Toggle play/pause
  const toggleAudio = useCallback(() => {
    if (currentAudioRef.current) {
      if (state.isPlaying) {
        pauseAudio();
      } else {
        currentAudioRef.current.play().catch(error => {
          console.error('Toggle play failed:', error);
          setState(prev => ({
            ...prev,
            audioError: 'Playback failed'
          }));
        });
      }
    }
  }, [state.isPlaying, pauseAudio]);

  // Set audio enabled state
  const setAudioEnabled = useCallback((enabled: boolean) => {
    if (!enabled) {
      stopAudio();
    }
    setState(prev => ({ ...prev, isAudioEnabled: enabled }));
  }, [stopAudio]);

  // Initialize on mount
  useEffect(() => {
    const initialize = async () => {
      const isMobile = detectMobile();
      const autoplaySupported = await testAutoplaySupport();
      
      setState(prev => ({
        ...prev,
        isMobile,
        autoplaySupported,
        // On desktop with autoplay support, enable audio by default
        isAudioEnabled: !isMobile && autoplaySupported,
        isUserInteracted: !isMobile && autoplaySupported
      }));

      // If not mobile and autoplay is supported, initialize audio context
      if (!isMobile && autoplaySupported) {
        await initializeAudioContext();
      }
    };

    initialize();
  }, [detectMobile, testAutoplaySupport, initializeAudioContext]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  return {
    ...state,
    enableAudio,
    playAudio,
    pauseAudio,
    stopAudio,
    toggleAudio,
    setAudioEnabled,
  };
};