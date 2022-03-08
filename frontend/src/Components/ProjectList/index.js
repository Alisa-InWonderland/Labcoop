import React from "react";
import "./style.css"
import {ProjectListItem} from "../ProjectListItem/index";



export function ProjectList({experiences, deleteExperience, loggedIn}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    return (
        <>
            <Hero/>

            <section className='experienceCatalog'>

                <h1 className="catalog-title">Nuestras experiencias</h1>

                <div className="barra-de-busqueda-container">
                    <input
                        className="barra-de-busqueda"
                        name="experience"
                        type="text"
                        onChange={getData}
                        placeholder="Busca una experiencia"
                    />

                </div>

                <div className="container-card">
                    {experiences.map((experience) => {
                        if (
                            experience.name.toLowerCase().indexOf(state.filter) >= 0 ||
                            state.filter.length === 0
                        ) {
                            return <ProjectListItem key={experience.id} experience={experience}
                                                   deleteExperience={deleteExperience} loggedIn={loggedIn}/>;
                        }
                        if (
                            experience.duration.toLowerCase().indexOf(state.filter) >= 0 ||
                            state.filter.length === 0
                        ) {
                            return <ProjectListItem key={experience.id} experience={experience}
                                                   deleteExperience={deleteExperience}/>;
                        }

                        return "";
                    })}
                </div>

            </section>
        </>
    );
}

