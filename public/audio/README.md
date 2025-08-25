# Audio Files for KnLbookery Presentation

This directory contains audio files for the presentation slides. Each slide has a corresponding audio file that will automatically play when the slide is displayed.

## File Naming Convention

Audio files should be named according to the following pattern:
- `slide-01-intro.mp3` - Introduction slide
- `slide-02-problem.mp3` - The Problem slide
- `slide-03-opportunity.mp3` - The Opportunity slide
- `slide-04-solution.mp3` - The Solution slide
- `slide-05-how-it-works.mp3` - How It Works slide
- `slide-06-customer-love.mp3` - Why Customers Love Us slide
- `slide-07-specialist-love.mp3` - Why Specialists Love Us slide
- `slide-08-business-model.mp3` - Business Model slide
- `slide-09-go-to-market.mp3` - Go-To-Market slide
- `slide-10-competitive-edge.mp3` - Competitive Edge slide
- `slide-11-traction.mp3` - Traction & Targets slide
- `slide-12-security.mp3` - Security & Trust slide
- `slide-13-technology.mp3` - Technology Overview slide
- `slide-14-call-to-action.mp3` - Call to Action slide

## Audio File Requirements

### Supported Formats
- **Primary**: MP3 (recommended for best browser compatibility)
- **Fallback**: OGG Vorbis (for Firefox optimization)
- **Alternative**: WAV (uncompressed, larger file size)

### Technical Specifications
- **Bitrate**: 128-192 kbps (good quality vs file size balance)
- **Sample Rate**: 44.1 kHz or 48 kHz
- **Channels**: Mono or Stereo
- **Duration**: 30-90 seconds per slide (recommended)
- **File Size**: Keep under 2MB per file for fast loading

### Audio Content Guidelines
- Clear, professional narration
- Consistent volume levels across all files
- Brief pause at the beginning (0.5 seconds)
- Smooth fade-in and fade-out
- Background music should be subtle and not overpower narration

## File Preparation Steps

1. **Record Audio**: Use a quality microphone in a quiet environment
2. **Edit**: Remove background noise, normalize volume levels
3. **Export**: Save as MP3 with 128-192 kbps bitrate
4. **Optimize**: Compress files while maintaining quality
5. **Test**: Verify playback across different browsers

## Browser Compatibility Notes

### Autoplay Policies
Modern browsers have strict autoplay policies:
- **Chrome**: Requires user interaction before autoplay
- **Safari**: Blocks autoplay by default
- **Firefox**: Allows autoplay for short audio clips
- **Edge**: Similar to Chrome's policy

### Fallback Strategy
The implementation includes:
- User controls to manually start audio
- Visual indicators for audio status
- Error handling for failed loads
- Option to disable audio entirely

## Implementation Features

### Audio Controls
- **Audio Toggle**: Enable/disable audio for entire presentation
- **Play/Pause**: Manual control over current slide audio
- **Visual Feedback**: Icons and status indicators
- **Error Handling**: Graceful fallback when audio fails

### Accessibility
- Visual indicators for audio status
- Manual controls for users who prefer them
- No audio dependency for core functionality
- Screen reader compatible controls

## Testing Checklist

- [ ] Audio files load correctly in all major browsers
- [ ] Autoplay works where permitted by browser policy
- [ ] Manual controls function properly
- [ ] Error states display appropriate messages
- [ ] Audio stops when navigating between slides
- [ ] Volume levels are consistent across all files
- [ ] File sizes are optimized for web delivery

## Troubleshooting

### Common Issues
1. **Audio won't autoplay**: Browser policy restriction - use manual controls
2. **Files not loading**: Check file paths and server configuration
3. **Poor quality**: Increase bitrate or check source recording
4. **Large file sizes**: Compress audio or reduce duration

### Server Configuration
Ensure your web server serves audio files with correct MIME types:
- MP3: `audio/mpeg`
- OGG: `audio/ogg`
- WAV: `audio/wav`