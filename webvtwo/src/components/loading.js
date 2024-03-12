import React from 'react'
import './assets/css/loading.css'
function Loading() {
    return (
        <section classNameName='theBody' style={{ display: 'flex', height: "100vh", width: "100vw", justifyContent: 'center', alignItems: 'center' }}>
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">Status</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="content">
                    <div className="textLoading">Loading...</div>
                </div>
            </div>

        </section>

    )
}

export default Loading
