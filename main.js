function App() {
    const st1 = { color : 'rgb(235 236 240)', 
        backgroundColor: 'rgba(35, 39, 47, 1)',
        minWidth: '640px',
        fontFamily: 'New Amsterdam'
    }
    const st2 = { color : 'rgb(235 236 240)', 
        backgroundColor: 'rgb(52 58 70)',
        marginTop: '2rem',
        marginBottom: '2rem',
        borderRadius: '1rem',
        padding: '1.5rem',
        paddingBottom: '1rem',
        fontSize: '15px',
        border: '0px solid rgb(229, 231, 235)'
    }
    return(
        <div style={st1}>
            <h1>Quick Start</h1>
            <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style={st2}>
            <h3>You will learn</h3>
            <ul>
                <li> How to create and nest component</li>
                <li> How to add markup and styles</li>
                <li> How to display data</li>
                <li> How to render conditions and lists</li>
                <li> How to respond to events and update the screen</li>
                <li> How to share data between components</li>
            </ul>

            </div>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)