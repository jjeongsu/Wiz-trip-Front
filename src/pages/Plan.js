import React from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
import Planner from '../components/Plan/Planner';
function Plan() {
  return (
    <Layout fullWidth={true}>
      <Planheader />
      <PlanLayout>
        <Planner> Planner</Planner>
        <div> MAPS</div>
        <div> MEMOS</div>
      </PlanLayout>
    </Layout>
  );
}
export default Plan;
