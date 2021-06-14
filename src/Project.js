import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import React, { useEffect, Component, useState } from 'react'
import { Button } from 'react-bootstrap';
import { render } from "@testing-library/react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
const Project = (props) => {
    var { id } = useParams()
    var values = []
    var ids = id.split("+")
    ids.pop()
    // console.log(id)
    // var selectValue;
    const [username, setUsername] = useState("")
    const [repo, setRepo] = useState("")
    const [project, setProject] = useState("")
    const [resp, setResp] = useState("")
    const [email, setEmail] = useState("")
    const [app_name, setAppname] = useState("")
    // const [ids, setIds] = useState([])

    function buttonClicked() {
        console.log('hi')

    }
    useEffect(() => {
        ids.pop()
    })
    function handleChange(e) {
        e.preventDefault();
        fetch('http://localhost:3000/build',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body:
                    JSON.stringify({
                        username: username,
                        project: project,
                        repo: repo,
                        email: email
                    })
            }).then(response => response.json())
            // Displaying results to console
            .then(json => {
                console.log(json)
                setResp(json)
            })
        console.log(username, project)
    }
    function handleProjectCreate(e) {
        e.preventDefault();
        fetch('http://localhost:3000/create',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body:
                    JSON.stringify({
                        username: username,
                        project: project,
                        repo: repo,
                        email: email,
                        app_name: app_name
                    })
            }).then(response => response.json())
            // Displaying results to console
            .then(json => {
                console.log(json)
                setResp(json)
            })
        console.log(username, project)
    }
    return (
        <div>

            <div className='example-square bg-info shadow-1-strong'>
                <MDBCard className='example-square bg-info shadow-1-strong'>

                    <MDBCardBody>

                        <h1>Project Page</h1>

                    </MDBCardBody>
                </MDBCard>
            </div>

            {
                ids.length &&
                <div >

                    <h3>Please use the form below to build a project</h3><br />
                    <h4>Your Github information is required to fetch the source code of the project.</h4>

                    <MDBContainer>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol md="6">
                                <MDBCard >

                                    <MDBCardBody>
                                        <form onSubmit={handleChange}>

                                            <p className="h4 text-center py-4">Build a Project</p>
                                            <label

                                                className="grey-text font-weight-light"
                                            >
                                                Select a Project
                                            </label>
                                            <br></br>
                                            <select
                                                value={project}
                                                onChange={e => setProject(e.target.value)}
                                            >
                                                {ids.map((value, index) => {
                                                    return (
                                                        // <li key={index}>{value}</li>

                                                        <option key={index} value={value}>{value}</option>


                                                    )
                                                })}
                                            </select>
                                            <br></br>
                                            <label
                                                htmlFor="defaultFormCardEmailEx"
                                                className="grey-text font-weight-light"
                                            >
                                                Heroku Email ID
                                            </label>
                                            <input
                                                type="email"
                                                id="defaultFormCardEmailEx"
                                                className="form-control"
                                                value={email} onChange={e => setEmail(e.target.value)}
                                            />
                                            <br />
                                            <label
                                                htmlFor="defaultFormCardNameEx"
                                                className="grey-text font-weight-light"
                                            >
                                                Github user name:-
                                            </label>
                                            <input
                                                type="text"
                                                id="defaultFormCardNameEx"
                                                className="form-control"
                                                value={username} onChange={e => setUsername(e.target.value)}
                                            />
                                            <br />


                                            <label
                                                htmlFor="defaultFormCardNameEx"
                                                className="grey-text font-weight-light"
                                            >
                                                Github Repository where the source code is present:-
                                            </label>
                                            <input
                                                type="text"
                                                id="defaultFormCardNameEx"
                                                className="form-control"
                                                value={repo} onChange={e => setRepo(e.target.value)}
                                            />
                                            <br />
                                            <div className="text-center py-4 mt-3">
                                                {/* <MDBBtn className="btn btn-outline-purple" type="submit">
                                                    Send
                                                     <MDBIcon far icon="paper-plane" className="ml-2" /> 
                                                </MDBBtn> */}
                                                <Button type="submit">Build Project</Button>
                                            </div>
                                            <h3>{resp}</h3>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            }
            {
                !ids.length && <div ><h3>There are no Projects available. Please use the form below to create a project</h3><br />
                    <h4>Your Github information is required to fetch the source code of the project.</h4>

                    <MDBContainer>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol md="6">
                                <MDBCard>

                                    <MDBCardBody>
                                        <form onSubmit={handleProjectCreate}>

                                            <p className="h4 text-center py-4">Create a Project</p>

                                            <label
                                                htmlFor="defaultFormCardEmailEx"
                                                className="grey-text font-weight-light"
                                            >
                                                Heroku Email ID
                                            </label>
                                            <input
                                                type="email"
                                                id="defaultFormCardEmailEx"
                                                className="form-control"
                                                value={email} onChange={e => setEmail(e.target.value)}
                                            />
                                            <br />
                                            <label
                                                htmlFor="defaultFormCardNameEx"
                                                className="grey-text font-weight-light"
                                            >
                                                Github user name:-
                                            </label>
                                            <input
                                                type="text"
                                                id="defaultFormCardNameEx"
                                                className="form-control"
                                                value={username} onChange={e => setUsername(e.target.value)}
                                            />
                                            <br />


                                            <label
                                                htmlFor="defaultFormCardNameEx"
                                                className="grey-text font-weight-light"
                                            >
                                                Github Repository where the source code is present:-
                                            </label>
                                            <input
                                                type="text"
                                                id="defaultFormCardNameEx"
                                                className="form-control"
                                                value={repo} onChange={e => setRepo(e.target.value)}
                                            />
                                            <br />
                                            <label
                                                htmlFor="defaultFormCardNameEx"
                                                className="grey-text font-weight-light"
                                            >
                                                Application Name:-
                                            </label>
                                            <input
                                                type="text"
                                                id="defaultFormCardNameEx"
                                                className="form-control"
                                                value={app_name} onChange={e => setAppname(e.target.value)}
                                            />
                                            <br />
                                            <div className="text-center py-4 mt-3">
                                                {/* <MDBBtn className="btn btn-outline-purple" type="submit">
                                                    Send
                                                     <MDBIcon far icon="paper-plane" className="ml-2" /> 
                                                </MDBBtn> */}
                                                <Button type="submit">Create Project</Button>
                                            </div>
                                            <h3>{resp}</h3>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            }
        </div >
    );
}
export default Project;


//frontend response
//the access token 
//web hooks


// export default class Project extends Component{

//     // var res;
//     // let {id} = useParams()

//     // const clicked=()=>{
//     //     console.log('clicked')
//     //     // fetch('http://localhost:3000/build')

//     // }
//     state={
//         res:'',
//         id:''
//     }
//     componentWillMount()
//     {
//             console.log(this.props)
//             // this.state.id = useParams()
//             // var resp;
//             // resp = split(this.state.id)
//             // console.log(resp)
//     }
//     render(){
//           const clicked=()=>{
//         console.log('clicked')
//         // fetch('http://localhost:3000/build')

//     }
//     return(
//         <div>
//             <h1>Project Page</h1>
//             <button onClick={clicked}>Get Project Data</button>
//             {/* <h1>{res[0]}</h1> */}
//         </div>
//     );
//     }
// }


{/* <select
                        value={selectValue}
                        onChange={handleChange}
                    >
            {ids.map((value, index) => {
                return (
                    // <li key={index}>{value}</li>
                   
                        <option key={index} value={value}>{value}</option>

                    
                )
            })}
            </select> */}
{/* <select
                value={selectValue}
                onChange={handleChange}
            >   
                <option value="Select">Select</option>
                <option value="Heroku">Heroku</option>
                <option value="Gatsby">Gatsby</option>
            </select> */}



{/* <form onSubmit={handleProjectCreate}>
                        <table>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td>
                                 <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Username:
                    </label>
                                </td>
                                <td>
                                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                                </td>

                            </tr>
                     
                            <tr>
                                <td>
                                    <label>
                                        Repo:
                    </label>
                                </td>
                                <td>
                                    <input type="text" value={repo} onChange={e => setRepo(e.target.value)} />
                                </td>
                            </tr>
                       
                            <input type="submit" value="Submit" />
                        </table>
                        <h3>{resp}</h3>
                    </form> */}


{/* <form onSubmit={handleChange}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <select
                                            value={project}
                                            onChange={e => setProject(e.target.value)}
                                        >
                                            {ids.map((value, index) => {
                                                return (
                                                    // <li key={index}>{value}</li>

                                                    <option key={index} value={value}>{value}</option>


                                                )
                                            })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Email:
                                    </td>
                                    <td>
                                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Username:
                                        </label>
                                    </td>
                                    <td>
                                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                                    </td>

                                </tr>

                                <tr>
                                    <td>
                                        <label>
                                            Repo:
                                        </label>
                                    </td>
                                    <td>
                                        <input type="text" value={repo} onChange={e => setRepo(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="submit" value="Submit" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>{resp}</h3>
                    </form> */}