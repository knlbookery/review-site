import React from 'react';
import { Volume2, VolumeX, Play, Pause, Clock, AlertCircle } from 'lucide-react';

interface AudioControlsProps {
  isAudioEnabled: boolean;
  isPlaying: boolean;
  audioError: string | null;
  isAutoNavigationEnabled: boolean;
  isMobile: boolean;
  autoplaySupported: boolean;
  onToggleAudio: () => void;
  onToggleAudioEnabled: () => void;
  onToggleAutoNavigation: () => void;
  onEnableAudio?: () => Promise<void>;
}

export const AudioControls: React.FC<AudioControlsProps> = ({
  isAudioEnabled,
  isPlaying,
  audioError,
  isAutoNavigationEnabled,
  isMobile,
  autoplaySupported,
  onToggleAudio,
  onToggleAudioEnabled,
  onToggleAutoNavigation,
  onEnableAudio
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
      {/* Audio Enable/Disable Toggle */}
      <button
        onClick={onToggleAudioEnabled}
        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors min-h-[36px] ${
          isAudioEnabled 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-red-500/20 text-red-400 border border-red-500/30'
        }`}
      >
        {isAudioEnabled ? <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />}
        <span className="hidden sm:inline">{isAudioEnabled ? 'Audio On' : 'Audio Off'}</span>
        <span className="sm:hidden">{isAudioEnabled ? 'On' : 'Off'}</span>
      </button>
      
      {/* Auto-Navigation Toggle */}
      <button
        onClick={onToggleAutoNavigation}
        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors min-h-[36px] ${
          isAutoNavigationEnabled 
            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
        }`}
      >
        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">{isAutoNavigationEnabled ? 'Auto-Nav On' : 'Auto-Nav Off'}</span>
        <span className="sm:hidden">{isAutoNavigationEnabled ? 'Auto' : 'Manual'}</span>
      </button>
      
      {/* Play/Pause Button (only show if audio is enabled) */}
      {isAudioEnabled && (
        <button
          onClick={onToggleAudio}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs sm:text-sm transition-colors min-h-[36px]"
        >
          {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}

      {/* Mobile Audio Enable Button (if audio is disabled on mobile) */}
      {isMobile && !isAudioEnabled && onEnableAudio && (
        <button
          onClick={onEnableAudio}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 rounded-lg text-xs sm:text-sm transition-all min-h-[36px] font-medium"
        >
          <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
          Enable Audio
        </button>
      )}
      
      {/* Audio Error Display */}
      {audioError && (
        <div className="flex items-center gap-1 sm:gap-2 text-red-400 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 bg-red-500/20 border border-red-500/30 rounded-lg min-h-[36px]">
          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="truncate max-w-[200px]">{audioError}</span>
        </div>
      )}

      {/* Mobile/Autoplay Status Indicator */}
      {isMobile && !autoplaySupported && (
        <div className="text-xs text-slate-400 px-2 py-1 bg-slate-700/50 rounded border border-slate-600/50">
          Mobile Mode
        </div>
      )}
    </div>
  );
};