import React from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
import Planner from '../components/Plan/Planner';
import Memo from '../components/Plan/Memo';
function Plan() {
  return (
    <Layout fullWidth={true}>
      <Planheader />
      <PlanLayout>
        <Planner> Planner</Planner>
        <div style={{height: '500px'}}> MAPS</div>
        <Memo/>
      </PlanLayout>
    </Layout>
  );
}
export default Plan;
