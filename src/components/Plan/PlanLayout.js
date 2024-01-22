import * as L from '../../styles/planlayout.style';
function PlanLayout({ children }) {
  return (
    <L.Wrapper>
      <L.PlanLayoutBox>{children}</L.PlanLayoutBox>
    </L.Wrapper>
  );
}
export default PlanLayout;
