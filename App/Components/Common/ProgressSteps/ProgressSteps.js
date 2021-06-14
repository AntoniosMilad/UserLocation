import React, {Component} from 'react';
import {View} from 'react-native';
import {times} from 'lodash';
import PropTypes from 'prop-types';
import StepIcon from './StepIcon';

class ProgressSteps extends Component {
  //progressStep states stepCounter & activeStep
  state = {
    stepCount: 0,
    activeStep: this.props.activeStep,
  };

  componentDidMount() {
    //set state for stepCount
    this.setState({stepCount: React.Children.count(this.props.children)});
  }

  componentDidUpdate(prevProps) {
    //if activeStep not equal activeStep state , set ActiveStep with the current activeStep number in state
    if (prevProps.activeStep !== this.props.activeStep) {
      this.setActiveStep(this.props.activeStep);
    }
  }

  getChildProps() {
    return {...this.props, ...this.state};
  }

  //render step icons
  renderStepIcons = () => {
    let step = [];

    times(this.state.stepCount, (i) => {
      const isCompletedStep = this.props.isComplete
        ? true
        : i < this.state.activeStep;

      const isActiveStep = this.props.isComplete
        ? false
        : i === this.state.activeStep;

      step.push(
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              label={this.props.children[i].props.label}
              isFirstStep={i === 0}
              isLastStep={i === this.state.stepCount - 1}
              isCompletedStep={isCompletedStep}
              isActiveStep={isActiveStep}
              length={this.props.children.length}
            />
          </View>
        </View>,
      );
    });

    return step;
  };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = (step) => {
    // Guard against setting current step higher than total step count.
    if (step >= this.state.stepCount - 1) {
      this.setState({activeStep: this.state.stepCount - 1});
    }

    if (step > -1 && step < this.state.stepCount - 1) {
      this.setState({activeStep: step});
    }
  };

  //style of step icon
  render() {
    const styles = {
      stepIcons: {
        position: 'relative',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flexDirection: 'row',
        top: 20,
        marginBottom: 50,
      },
    };

    return (
      <View style={{flex: 1}}>
        <View style={styles.stepIcons}>{this.renderStepIcons()}</View>
        <View style={{flex: 1}}>
          {React.cloneElement(this.props.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount,
          })}
        </View>
      </View>
    );
  }
}

ProgressSteps.propTypes = {
  isComplete: PropTypes.bool,
  activeStep: PropTypes.number,
};

ProgressSteps.defaultProps = {
  isComplete: false,
  activeStep: 0,
};

export default ProgressSteps;
