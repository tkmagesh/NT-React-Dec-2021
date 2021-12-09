import BugItem from './BugItem';

const BugList = ({bugs, removeClosed, toggle, remove}) => {
    const bugItems = bugs.map(bug => (
        <BugItem key={bug.id} {...{bug, toggle, remove}} />
    ));
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <button onClick={() => removeClosed(bugs)}>Remove Closed</button>
        </section>
    )
};

export default BugList;