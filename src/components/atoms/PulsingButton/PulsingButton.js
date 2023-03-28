import { Button, Circle, InnerWrapper, OuterWrapper } from './PulsingButton.styles';
import { ReactComponent as LiveIcon } from 'assets/icons/live.svg';

const PulsingButton = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Circle delay={'-2s'} />
        <Circle delay={'-1s'} />
        <Circle delay={'0s'} />
        <Button>
          <LiveIcon />
        </Button>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default PulsingButton;
