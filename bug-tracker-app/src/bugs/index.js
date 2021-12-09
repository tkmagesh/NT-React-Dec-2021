/* Bugs Component */
import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import './index.css';

const Bugs = ({bugs, addNew, remove, toggle, removeClosed}) => {
    return(
        <>
            <BugStats bugs={bugs} />
            <BugSort/>
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
};

export default Bugs;