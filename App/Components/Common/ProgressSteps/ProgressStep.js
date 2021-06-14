import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import ProgressButtons from './ProgressButtons';

class ProgressStep extends Component {
  //next step function (next screen)
  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());
    // Return out of method before moving to next step if errors exist.
    if (this.props.errors) {
      return;
    }
    //here increase activeStep with 1 to move to next step
    this.props.setActiveStep(this.props.activeStep + 1);
  };

  //previous step function (back to previous)
  onPreviousStep = () => {
    // Changes active index and calls previous function passed by parent
    this.props.onPrevious && this.props.onPrevious();
    //decrease active step state
    this.props.setActiveStep(this.props.activeStep - 1);
  };

  //submit function
  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  //render for next button
  renderNextButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.nextBtnStyle,
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.nextBtnTextStyle,
    };

    const disabledBtnText = {
      color: '#cdcdcd',
    };

    let textStyle = [btnTextStyle];
    if (this.props.nextBtnDisabled) {
      textStyle.push(disabledBtnText);
    }

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={
          this.props.activeStep === this.props.stepCount - 1
            ? this.onSubmit
            : this.onNextStep
        }
        disabled={this.props.nextBtnDisabled}>
        <Text style={textStyle}>
          {this.props.activeStep === this.props.stepCount - 1
            ? this.props.finishBtnText
            : this.props.nextBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  //render previous button
  renderPreviousButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.previousBtnStyle,
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.previousBtnTextStyle,
    };

    const disabledBtnText = {
      color: '#cdcdcd',
    };

    let textStyle = [btnTextStyle];
    if (this.props.previousBtnDisabled) {
      textStyle.push(disabledBtnText);
    }

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={this.onPreviousStep}
        disabled={this.props.previousBtnDisabled}>
        <Text style={textStyle}>
          {this.props.activeStep === 0 ? '' : this.props.previousBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  //render all component
  render() {
    const scrollViewProps = this.props.scrollViewProps || {flex: 1};
    const buttonRow = this.props.removeBtnRow ? null : (
      <ProgressButtons
        renderNextButton={this.renderNextButton}
        renderPreviousButton={this.renderPreviousButton}
      />
    );

    return <View style={{flex: 1}}>{this.props.children}</View>;
  }
}

ProgressStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onSubmit: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  finishBtnText: PropTypes.string,
  stepCount: PropTypes.number,
  nextBtnStyle: PropTypes.object,
  nextBtnTextStyle: PropTypes.object,
  nextBtnDisabled: PropTypes.bool,
  previousBtnStyle: PropTypes.object,
  previousBtnTextStyle: PropTypes.object,
  previousBtnDisabled: PropTypes.bool,
  scrollViewProps: PropTypes.object,
  errors: PropTypes.bool,
  removeBtnRow: PropTypes.bool,
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous',
  finishBtnText: 'Submit',
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
};

export default ProgressStep;
