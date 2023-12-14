import React from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
function Plan() {
  return (
    <Layout fullWidth={true}>
      <Planheader />
      <PlanLayout></PlanLayout>
    </Layout>
  );
}
export default Plan;
