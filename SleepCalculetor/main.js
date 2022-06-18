const getSleepHours = day =>{

    switch(day){
      case 'monday':
      return 8
      break;
      case 'tuesday':
      return 8
      break;
      case 'wednesday':
      return 7
      break;
      case 'thursday':
      return 4
      break;
      case 'firday':
      return 3
      break;
      case 'saturday':
      return 5
      break;
      case 'sunday':
      return 8
      break;
  
     default:
     return 'error'
    }
  };
  
  console.log(getSleepHours('monday'));
  
  console.log(getSleepHours('sunday'));
  console.log(getSleepHours('tuesday'));
  
  
  const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
  
  console.log(getActualSleepHours());// this code does not work
  
  const getIdealSleepHours = () =>{
  let idealHours= 8;
    return idealHours * 7;
  };
  
  
  console.log(getIdealSleepHours());
  
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
  
  
    if(actualsleepHours > idealSleepHours){
      console.log('U got enough sleep');
    }
  
    else if(actualsleepHours === idealSleepHours){
      console.log('U got perfect sleep');
    }
  
  
     else if(actualsleepHours <idealSleepHours){
      console.log('U need sleep');
    }
    else{
      console.log("erroooor");
    }
  
  };
  
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  