import Header from './components/Header.jsx';
import SubmitStateObject from './components/SubmitStateObject.jsx';
import SubmitStates from './components/SubmitStates.jsx';
import SubmitRefs from './components/SubmitRefs.jsx';
import SubmitFormData from './components/SubmitFormData.jsx';
import ValidKeyBlur from './components/ValidKeyBlur.jsx';
import ValidWholeForm from './components/ValidWholeForm.jsx';
import ValidBuildIn from './components/ValidBuildIn.jsx';
import ReusableInputs from './components/ReusableInputs.jsx';
import OutsourcingValidation from './components/OutsourcingValidation.jsx';
import CustomHook from './components/CustomHook.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <h2 className="form-title">1. Submit - separated states</h2>
        <SubmitStates />
        <h2 className="form-title">2. Submit - state as an object</h2>
        <SubmitStateObject />
        <h2 className="form-title">3. Submit - refs</h2>
        <SubmitRefs />
        <h2 className="form-title">4. Submit - Form Data</h2>
        <SubmitFormData />
        <h2 className="form-title">5. Validation - keystroke & focus/blur</h2>
        <ValidKeyBlur />
        <h2 className="form-title">6. Validation - whole form during submission</h2>
        <ValidWholeForm />
        <h2 className="form-title">7. Validation - form browser validation</h2>
        <ValidBuildIn />
        <h2 className="form-title">8. Reasable components - Inputs</h2>
        <ReusableInputs />
        <h2 className="form-title">9. OutsourcingValidation</h2>
        <OutsourcingValidation />
        <h2 className="form-title">10. Custom Hook</h2>
        <CustomHook />

      </main>
    </>
  );
}

export default App;
