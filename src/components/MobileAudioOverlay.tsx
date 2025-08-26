import React from 'react';
import { Volume2, Smartphone, Play } from 'lucide-react';

interface MobileAudioOverlayProps {
  onEnableAudio: () => Promise<void>;
  isLoading?: boolean;
}

export const MobileAudioOverlay: React.FC<MobileAudioOverlayProps> = ({ 
  onEnableAudio, 
  isLoading = false 
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-600 rounded-2xl p-6 md:p-8 text-center max-w-sm mx-auto shadow-2xl">
        {/* Animated Audio Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center">
            <Volume2 className="w-10 h-10 text-white" />
          </div>
          {/* Pulsing rings */}
          <div className="absolute inset-0 w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 rounded-full animate-ping"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full animate-ping animation-delay-75"></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Enable Audio Experience
        </h2>
        
        <p className="text-slate-300 mb-6 leading-relaxed">
          This presentation includes narrated audio for each slide. 
          Tap below to enable audio playback on your mobile device.
        </p>

        {/* Mobile-specific instructions */}
        <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Smartphone className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Mobile Tip</span>
          </div>
          <p className="text-xs text-slate-400 text-left">
            Due to mobile browser policies, audio requires user interaction. 
            This is a one-time setup for the entire presentation.
          </p>
        </div>

        {/* Enable Audio Button */}
        <button
          onClick={onEnableAudio}
          disabled={isLoading}
          className="w-full px-6 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-600 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3 mb-4"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Enabling Audio...
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Tap to Enable Audio
            </>
          )}
        </button>

        {/* Skip option */}
        <button
          onClick={() => {/* This will be handled by parent component */}}
          className="text-sm text-slate-400 hover:text-slate-300 transition-colors underline"
        >
          Continue without audio
        </button>
      </div>
    </div>
  );
};