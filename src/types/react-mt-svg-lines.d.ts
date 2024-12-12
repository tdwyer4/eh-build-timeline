declare module 'react-mt-svg-lines' {
    import * as React from 'react';
  
    interface SvgLinesProps {
      animate?: boolean;
      duration?: number;
      stagger?: number;
      timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
      playback?: 'forwards' | 'backwards' | 'both';
      fade?: boolean;
      from?: 'top' | 'center' | 'bottom';
      to?: 'top' | 'center' | 'bottom';
      children?: React.ReactNode;
    }
  
    const SvgLines: React.FC<SvgLinesProps>;
  
    export default SvgLines;
  }