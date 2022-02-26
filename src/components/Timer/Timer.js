import styles from './Timer.module.scss';

const Timer = props => {

  const numberToString = number => {
    if (number < 10){
      number = number.toString();
      number = '0'+ number;
      return number;
    }
    else {
      return number;
    }
  }

  return (
    <div>
      <h1 className={styles.time}>{numberToString(props.hr)}:{numberToString(props.min)}:{numberToString(props.sec)}.{props.ms}</h1>
    </div>
  );

}

export default Timer;