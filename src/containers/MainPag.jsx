import React, {useState} from "react";
import {connect} from "react-redux";
import {Filter} from "../components/Filter";
import {ModalWindow} from "../components/ModalInvite";


const MainPage = ({people, genders}) => {
    console.log("people", people);

    const [filteredPeople, setFilteredPeople] = useState([]);
    const [showModal, setShowModal] = useState(null);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    return (
        <React.Fragment>
            <Filter people={people} setFilteredPeople={setFilteredPeople} genders={genders}/>
            <div className="people-list">
                    {filteredPeople.length
                        ? filteredPeople.map(item => (
                            <div key={item.id} className={`person${item.status === "active" ? "black" : ""}`} onClick={()=>setShowModal(item)}>
                                <span className="person-id"># {item.id} -</span>
                                <span className="person-name">{item.first_name}</span>
                                <span className="person-surname">{item.last_name}</span>
                                <span className="person-gender">- {item.gender}</span>
                            </div>))
                        : people.map(item => (
                            <div key={item.id} className={`person${item.status === "active" ? "black" : ""}`} onClick={()=>setShowModal(item)}>
                                <span className="person-id"># {item.id} -</span>
                                <span className="person-name">{item.first_name}</span>
                                <span className="person-surname">{item.last_name}</span>
                                <span className="person-gender">- {item.gender}</span>
                            </div>))
                    }
            </div>
            {showModal && <ModalWindow data={showModal} handleCloseModal={toggleShowModal}/>}
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    people: state.data.people,
    genders: state.data.genders
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);