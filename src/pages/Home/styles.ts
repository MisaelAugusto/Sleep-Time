import styled, { css } from 'styled-components';

import Alarm from '../../assets/clock/alarm.svg';
import RedButton from '../../assets/clock/red-button.svg';
import GreyButton from '../../assets/clock/grey-button.svg';
import OrangeButton from '../../assets/clock/orange-button.svg';

interface OptionProps {
  selected: boolean;
}

interface OptionsProps {
  isErrored: boolean;
}

interface AlarmButtonProps {
  isPressed: boolean;
}

export const Logo = styled.div`
  display: flex;
  margin-top: 0.8rem;
  align-items: center;
  flex-direction: column;

  p {
    color: #e7cf09;
    font-weight: 100;
  }
`;

export const Options = styled.div<OptionsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.2rem 0;

  ${props =>
    props.isErrored &&
    css`
      animation: error 0.5s;

      @keyframes error {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}

  .wake-up,
  .go-to-sleep {
    border: 0;
    width: 9rem;
    height: 9rem;
    background: #344c79;
    border-radius: 0.8rem;
    transition: transform 0.2s;

    img {
      width: 80%;
      height: 80%;
    }

    & + div {
      margin-left: 1.6rem;
    }
  }

  .wake-up {
    background: #fffdd2;
    margin-right: 1.2rem;
  }
`;

export const Option = styled.button<OptionProps>`
  ${props =>
    props.selected &&
    css`
      transform: scale(1.2);
    `}
`;

export const Form = styled.form`
  display: flex;
  padding: 0 3.2rem;
  font-size: 2.8rem;
  margin-top: 2.4rem;
  align-items: center;
  flex-direction: column;

  .clock-buttons {
    display: flex;
    margin-top: 1.2rem;
    justify-content: flex-start;

    img {
      width: 4.6rem;
    }

    .red,
    .orange {
      border: 0;
      width: 4.8rem;
      height: 1.8rem;
    }

    .red {
      margin-right: 3.2rem;
      background: url(${RedButton}) no-repeat center;
      background-size: 100%;
    }

    .orange {
      background: url(${OrangeButton}) no-repeat center;
      background-size: 100%;
    }
  }

  .clock-numbers {
    width: 18rem;
    height: 7.2rem;
    margin-top: -0.8rem;
    z-index: 5;
    background: url(${Alarm}) no-repeat center;
    background-size: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 11%;
      top: -0.3rem;
      position: relative;
    }

    .hour-left {
      margin-left: 0.2rem;
    }

    .hour-left,
    .minute-left {
      margin-right: 0.6rem;
    }
    .minute-right {
      margin-right: 0.8rem;
    }

    .hour-right {
      margin-right: 1.6rem;
    }

    .day-period {
      top: 0.8rem;
      position: relative;
    }
  }

  .reset-button {
    .grey {
      border: 0;
      left: 9.2rem;
      top: -4.4rem;
      width: 1.2rem;
      height: 2.4rem;
      position: relative;
      background: url(${GreyButton}) no-repeat center;
      background-size: 110%;
    }
  }

  .calculate-button {
    border: 0;
    width: 80%;
    height: 3.6rem;
    color: #1c1c1c;
    font-size: 1.6rem;
    margin: -1.2rem 0 1.6rem 0;
    background: #e7cf09;
    border-radius: 0.8rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const AlarmButton = styled.button<AlarmButtonProps>`
  ${props =>
    props.isPressed &&
    css`
      transition: transform 0.2s;

      transform: translateY(0.2rem);
    `}
`;

export const PeriodButton = styled.button<AlarmButtonProps>`
  ${props =>
    props.isPressed &&
    css`
      transition: transform 0.2s;

      transform: translateX(-0.2rem);
    `}
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  justify-content: center;

  p {
    width: 80%;
    color: #f1f1f1;
    font-size: 1.2rem;
    font-style: italic;
    text-align: justify;

    span {
      color: #e7cf09;
    }
  }
`;

export const Alarms = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1000px) {
    flex-direction: row;

    > div + div {
      margin-left: 1.6rem;
    }
  }
`;

export const Contact = styled.footer`
  display: flex;
  margin-bottom: 1.2rem;
  align-items: center;
  justify-content: center;

  svg {
    transition: transform 0.2s;

    & + svg {
      padding-left: 0.8rem;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Pipe = styled.div`
  width: 0.05rem;
  height: 2.4rem;
  margin: 0 0.6rem;
  background: #f1f1f1;
`;
