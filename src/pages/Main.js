import React, {useState} from 'react';
import Layout from '../components/Layout';
import PlanBox from '../components/Main/PlanBox';
import PlanActiveBox from '../components/Main/PlanActiveBox';
import TourInfo from '../components/Main/TourInfos';
function Main() {

  const [InputPlan, setInputPlan] = useState(false);
  return (
    <Layout>
      {InputPlan? <PlanActiveBox setInputPlan={setInputPlan}/>: <PlanBox setInputPlan={setInputPlan}/>}
      <TourInfo />
    </Layout>
  );
}
export default Main;
