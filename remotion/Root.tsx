import {Composition} from 'remotion';
import {BrandMakersFullLogo} from './brand-makers-full-logo';

export const RemotionRoot = () => {
  return (
    <Composition
      id="BrandMakersFullLogo"
      component={BrandMakersFullLogo}
      durationInFrames={120}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
