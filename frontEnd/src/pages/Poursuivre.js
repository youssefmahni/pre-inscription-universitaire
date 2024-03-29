import React, { useState, useEffect, useRef } from "react";
import Header from "../userComp/Header";
import Copyright from "../mainComp/Copyright";
import UpperMenu from "../mainComp/UpperMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Poursuivre = () => {
    //states
    const [user, setUser] = useState([]);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState(user[15]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:3500/check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cin: "j",
            }),
        });
        const data = await responce.json();
        if (data.status === "ok") {
            setShow(true);
        }
    };
    const apply = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:3500/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cin: user[6],
                phone: "212 " + phone,
                email,
            }),
        });
        const data = await responce.json();
        if (data.status === "ok") {
            localStorage.setItem("cin", user[6]);
            sessionStorage.setItem("code", user[16]);
            window.location.href = "/personal";
        }
    };
    const quiter = () => {
        window.location.href = "/";
    };

    //regex
    const PHONE_REGEX = /^[6,7]{1}[0-9]{8}$/;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //refs
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const responce = await fetch("http://localhost:3500/account", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                });
                const data = await responce.json();
                setUser([
                    data.response.nom,
                    data.response.prenom,
                    data.response.sex,
                    data.response.datenaissance,
                    data.response.ville,
                    data.response.nationalite,
                    data.response.cin,
                    data.response.phone.slice(4),
                    data.response.seriebac,
                    data.response.anneebac,
                    data.response.mentionbac,
                    data.response.dernierdiplom,
                    data.response.anneediplom,
                    data.response.specialitediplom,
                    data.response.etablissement,
                    data.response.email,
                    data.response.code,
                    data.response.s1,
                    data.response.s2,
                    data.response.s3,
                    data.response.s4,
                    data.response.relves1,
                    data.response.relves2,
                    data.response.relves3,
                    data.response.relves4,
                ]);
            } catch (error) {
                window.location.href = "/missing";
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <UpperMenu />
            <Header />
            <div
                className="container rounded p-5"
                style={{ background: "#eee" }}
            >
                <div className="container">
                    <div className="row mb-5">
                        <h1>
                            Condidat : {user[0]} {user[1]}
                        </h1>
                        <h6>
                            votre condidature est bien recu et en cours de
                            traitement
                        </h6>
                    </div>
                    <div className="row mb-5 border p-3">
                        <div className="col p-5 pt-0">
                            <h2>informations personel</h2>
                            <h5>CIN : {user[6]}</h5>

                            <h5>Sex : {user[2]}</h5>

                            <h5>Date de naissance : {user[3]}</h5>

                            <h5>Lieu de naissance : {user[4]}</h5>
                            <h5>Nationalite : {user[5]}</h5>
                        </div>
                        <div className="col p-5 pt-0">
                            <h2>Informations acadymique</h2>
                            <h5>serie bac : {user[8]}</h5>

                            <h5>Annee Bac : {user[9]}</h5>

                            <h5>Mention bac : {user[10]}</h5>
                            <h5>Dernier diplom : {user[11]}</h5>
                            <h5>Annee Dernier Diplom : {user[12]}</h5>
                            <h5>Specialite du dernier diplom : {user[13]}</h5>
                            <h5>
                                Nom d'etablissement du dernier diplom :{" "}
                                {user[14]}
                            </h5>
                        </div>
                        <div className="col">
                            <br />
                            <br />
                            <h5>Note s1 : {user[17]}/20</h5>
                            <h5>
                                relevee de note s1 :{" "}
                                <a
                                    href={`http://localhost:3500/uploads/${
                                        user[21] === undefined
                                            ? user[21]
                                            : user[21].slice(12)
                                    }`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {"releveeS1"}
                                </a>
                            </h5>
                            <h5>Note s2 : {user[18]}/20</h5>
                            <h5>
                                relevee de note s2 :{" "}
                                <a
                                    href={`http://localhost:3500/uploads/${
                                        user[22] === undefined
                                            ? user[22]
                                            : user[22].slice(12)
                                    }`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {"releveeS2"}
                                </a>
                            </h5>
                            <h5>Note s3 : {user[19]}/20</h5>
                            <h5>
                                relevee de note s3 :{" "}
                                <a
                                    href={`http://localhost:3500/uploads/${
                                        user[23] === undefined
                                            ? user[23]
                                            : user[23].slice(12)
                                    }`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {"releveeS3"}
                                </a>
                            </h5>
                            <h5>Note s4 : {user[20]}/20</h5>
                            <h5>
                                relevee de note s4 :{" "}
                                <a
                                    href={`http://localhost:3500/uploads/${
                                        user[24] === undefined
                                            ? user[24]
                                            : user[24].slice(12)
                                    }`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {"releveeS4"}
                                </a>
                            </h5>
                        </div>
                    </div>
                    <form className="row g-3 border p-3" onSubmit={handleShow}>
                        <div className="col-md-7">
                            <label for="phone" className="form-label">
                                Vous pouvez modifier votre numero du Téléphone
                            </label>
                            <div class="input-group">
                                <span class="input-group-text">+212</span>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder={user[7]}
                                    id="phone"
                                    value={phone}
                                    ref={phoneRef}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        if (PHONE_REGEX.test(e.target.value)) {
                                            phoneRef.current.className =
                                                "form-control is-valid";
                                        } else if (e.target.value === "") {
                                            phoneRef.current.className =
                                                "form-control";
                                        } else {
                                            phoneRef.current.className =
                                                "form-control is-invalid";
                                        }
                                    }}
                                    style={{ fontSize: "20px" }}
                                    autoComplete="off"
                                />
                                <div className="invalid-feedback">
                                    Founie un numero de telephone morocain
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <label for="mail" className="form-label">
                                Vous pouvez modifier votre Adresse Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="mail"
                                value={email}
                                ref={emailRef}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (EMAIL_REGEX.test(e.target.value)) {
                                        emailRef.current.className =
                                            "form-control is-valid";
                                    } else if (e.target.value === "") {
                                        emailRef.current.className =
                                            "form-control";
                                    } else {
                                        emailRef.current.className =
                                            "form-control is-invalid";
                                    }
                                }}
                                placeholder={user[15]}
                                autoComplete="off"
                                style={{ fontSize: "20px" }}
                            />
                            <div className="invalid-feedback">
                                une adresse email correct come
                                "exemple@example.abc"
                            </div>
                        </div>
                        <div className="col-md-7 m-2">
                            <button className="btn btn-danger" onClick={quiter}>
                                Quiter
                            </button>
                            <button
                                className="btn btn-primary m-2"
                                type="submit"
                                ref={buttonRef}
                                disabled={
                                    (!phone && !email) ||
                                    document.querySelector(".is-invalid")
                                }
                            >
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <Copyright />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Assurez-vous que les informations fournies sont correctes
                    avant de valider le formulaire
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Retourn
                    </Button>

                    <Button variant="primary" onClick={apply}>
                        Je confirme
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Poursuivre;
