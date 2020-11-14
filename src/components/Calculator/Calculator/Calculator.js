import React from "react";
import InputCard from "../InputCards/InputCard";
import GenderCard from '../GenderCard';
import GoalsCard from "../GoalsCard/GoalsCard";
import PhysicalAct from '../PhysicalAct';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Calculator extends React.Component {
  state = {
    age: null,
    weight: null,
    gender: '',
    height: null,
    goals: '',
    physicalActivity: '',
    caloricIntake: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log('name', name)
    console.log('value', value)
    this.setState({ [name]: value }, () => {
      this.caloricCalculator();
    });
  };


  // loseWeight = () => {
  //   this.setState({ goals:'lose'}, () => {
  //     this.caloricCalculator();
  //   })
  // }

  // maintainWeight = () => {
  //   this.setState({ goals:'maintain'}, () => {
  //     this.caloricCalculator();
  //   })
  // }

  // gainWeight = () => {
  //   this.setState({ goals:'gain'}, () => {
  //     this.caloricCalculator();
  //   })
  // }

  calculateBasalCaloricIntake = (gender) => {
    const { weight, height, age } = this.state;
    let basalCaloricIntake;
    //console.log([Number(weight), Number(height), Number(age), gender, goals, physicalActivity]);
    if(gender === 'male'){
  // Formula applied for man: (13.75 x weight) + (5 x height) - 6.76 x age) + 66.5
      //console.log((13.75 * weight) + (5 * height) - (6.76 * age) + 66.5);
      basalCaloricIntake = (13.75 * weight) + (5 * height) - (6.76 * age) + 66.5;
    } else if(gender === 'female'){
  // Formula applied for woman: (9.56 x weight) + (1.85 x height) - (4.68 x age) + 665
      // console.log((9.56 * weight) + (1.85 * height) - (4.68 * age) + 665)
      basalCaloricIntake = (9.56 * weight) + (1.85 * height) - (4.68 * age) + 665;
    }
    return basalCaloricIntake
  }

  physicalActivityCalculator = (basalCaloricIntake, physicalActivity) => {
     // Daily Activity:
      //   Sedentary: Gasto energético basal x 1.2
      //   Light:  Gasto energético basal x 1.375
      //   Moderate:  Gasto energético basal x 1.55
      //   Vigorous:  Gasto energético basal x 1.725
      let normalCaloricIntake;
      let sedentary = 1.2, light = 1.375, moderate = 1.55, vigorous = 1.725;
      switch(physicalActivity){
        case 'sedentary':
          normalCaloricIntake = (basalCaloricIntake * sedentary);
          break;
        case 'light':
          normalCaloricIntake = (basalCaloricIntake * light);
          break;
        case 'moderate':
          normalCaloricIntake = (basalCaloricIntake * moderate);
          break;
        case 'vigorous':
          normalCaloricIntake = (basalCaloricIntake * vigorous);
          break;
        default:
          normalCaloricIntake = (basalCaloricIntake * 0);
          break;
      }
      return normalCaloricIntake;
  }


  calculateFinalCaloricIntake = (normalCaloricIntake, goals) => {
    let finalCaloricIntake;
    switch(goals){
        case 'lose':
          finalCaloricIntake = normalCaloricIntake - 300;
          break;
        case 'maintain':
          finalCaloricIntake = normalCaloricIntake;
          break;
        case 'gain':
          finalCaloricIntake = normalCaloricIntake + 300;
          break;
        default:
          finalCaloricIntake = normalCaloricIntake * 0;
          break;
      }
      return finalCaloricIntake;
  }

  caloricCalculator = () => {
    const { weight, height, age, gender } = this.state;
    if (weight && height && age && gender && this.state.goals && this.state.physicalActivity) {
      let basalCaloricIntake = this.calculateBasalCaloricIntake(gender)
      let normalCaloricIntake = this.physicalActivityCalculator(basalCaloricIntake, this.state.physicalActivity)
      let finalCaloricIntake = this.calculateFinalCaloricIntake(normalCaloricIntake, this.state.goals)
      this.setState({caloricIntake: finalCaloricIntake.toFixed(0)});
    };
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className='mb-3 d-flex justify-content-center'>
            <GenderCard
              title="What is your gender?"
              handleChangeGender={this.handleChange}
              currentGenderSelected={this.state.gender}
            />
          </Col>
          <Col className='mb-3 d-flex justify-content-center'>
            <InputCard
              title="How old are you?"
              name="age"
              unit='years'
              currentValue={this.state.age}
              handleChange={this.handleChange}
              />
          </Col>
          </Row>
          <Row>
            <Col className='mb-3 d-flex justify-content-center'>
              <InputCard
                title="Your height?"
                name="height"
                unit='cm'
                currentValue={this.state.height}
                handleChange={this.handleChange}
              />
            </Col>
            <Col className='mb-3 d-flex justify-content-center'>
              <InputCard
                title="Your weight?"
                name="weight"
                unit='kg'
                currentValue={this.state.weight}
                handleChange={this.handleChange}
                />
            </Col>
          </Row>
          <Row>
            <Col className='mb-3 d-flex justify-content-center'>
              <PhysicalAct
                title='What is your daily activity level?'
                name='physicalActivity'
                currentValue={this.state.physicalActivity}
                handleActivityLevel={this.handleChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col className='mb-3 d-flex justify-content-center'>
              <GoalsCard
                title="What is your goal?"
                name='goals'
                currentValue={this.state.goals}
                handleGoals={this.handleChange}
                // loseWeight={this.loseWeight}
                // maintainWeight={this.maintainWeight}
                // gainWeight={this.gainWeight}
              />
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Card border='warning' className='mb-4' style={{ width: '28rem', height: '6rem' }}>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <Card.Title className='text-center'>
                    Your Caloric Intake: {this.state.caloricIntake}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center mb-4'>
            <button style={{ border: 'none',
              padding: '17px',
              backgroundColor: '#F69740',
              borderRadius: '50%' }}>
            <Link style={{ textDecoration: 'none',
              color: 'white' }}
              className='link' to="/meal-plan">
              Meal<br/>Plan
            </Link>
            </button>
          </Row>
      </Container>
    );
  }
}

export default Calculator;
