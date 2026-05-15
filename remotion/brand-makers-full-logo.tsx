import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const brandBlue = '#00a1e1';
const logoWidth = 291;
const logoHeight = 35;
const textStartX = 47;

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const BrandMakersFullLogo = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const logoSrc = staticFile('brandmakers-logo-white.svg');

  const markOpacity = interpolate(frame, [0, 0.2 * fps], [0, 1], clamp);
  const textProgress = interpolate(frame, [0.32 * fps, 1.65 * fps], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(frame, [3.45 * fps, 4 * fps], [1, 0], clamp);

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        backgroundColor: brandBlue,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox={`0 0 ${logoWidth} ${logoHeight}`}
        style={{
          opacity,
          overflow: 'visible',
          width: 820,
        }}
      >
        <defs>
          <clipPath id="bm-mark-clip">
            <rect x={0} y={0} width={39} height={logoHeight} />
          </clipPath>
          <clipPath id="bm-text-clip">
            <rect
              x={textStartX}
              y={0}
              width={(logoWidth - textStartX) * textProgress}
              height={logoHeight}
            />
          </clipPath>
        </defs>

        <image
          href={logoSrc}
          width={logoWidth}
          height={logoHeight}
          clipPath="url(#bm-mark-clip)"
          opacity={markOpacity}
        />
        <image
          href={logoSrc}
          width={logoWidth}
          height={logoHeight}
          clipPath="url(#bm-text-clip)"
        />
      </svg>
    </AbsoluteFill>
  );
};
