import {  useEffect, useState } from "react";
import { SaveToLocalStrg } from "../../Core/Corefunctions.tsx";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./StyleLogin.module.scss";
import { useAppContext } from "../../../Context/Context.tsx";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { SignIn } from "../../Services/Authentication.tsx";

export default function Signin() {
    const [userData, setUserData] = useState<{ userName: string; password: string }>({
        userName: "",
        password: "",
    });
    const { ShowAlert, supabase } = useAppContext();
    const navigate = useNavigate();

    async function VerifyLogin(e: React.FormEvent) {
        e.preventDefault();
      

        try {
            const { data, error } = await SignIn(userData.userName, userData.password, supabase);

            if (error) {
                ShowAlert("Usuário ou senha inválidos", "warning");
                console.error("Usuário ou senha inválidos:", error.message);
                setUserData({ userName: "", password: "" });
                return;
            }

            if (data) {
                ShowAlert("Usuário autenticado com sucesso", "success");
                SaveToLocalStrg("session", JSON.stringify(data.session)); 
                SaveToLocalStrg("user", JSON.stringify(data.user)); 
                navigate("/");
            }
        } catch (err) {
            console.error("Unexpected error during login:", err);
            ShowAlert("Ocorreu um erro. Tente novamente mais tarde.", "error");
            setUserData({ userName: "", password: "" });
        }
    }

    useEffect(() => {
        ShowAlert("Olá Bem-vindo ao TP de React, Digite usuário e senha, ou crie uma conta", "success");
    }, []);

    function HandleChange(e: React.ChangeEvent<HTMLInputElement>, field: "userName" | "password") {
        const value = e.currentTarget.value;
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    }

    return (
        <div>
            <Typography
                variant="h2"
                component="h2"
                align="center"
                gutterBottom
                style={{ fontSize: "3rem", fontWeight: "bold" }}
            >
                Login
            </Typography>

            <form onSubmit={VerifyLogin} className={styles.container}>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={userData.userName}
                    onChange={(e) => HandleChange(e, "userName")}
                    className={styles.input}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={userData.password}
                    onChange={(e) => HandleChange(e, "password")}
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>
                    Login
                </button>

                <Link to="/signup">
                    <IconButton
                        color="primary"
                        sx={{
                            margin: "10px",
                            width: "150px",
                            height: "40px",
                            backgroundColor: "#1a1a1a",
                            borderRadius: "10px",
                            gap: "10px",
                            color: "#fff",
                            fontSize: "16px",
                            "&:hover": {
                                backgroundColor: "#1a1a1a",
                                borderColor: "#646cff",
                                borderWidth: "2px",
                                borderStyle: "solid",
                            },
                        }}
                    >
                        <PersonAddIcon /> Criar conta
                    </IconButton>
                </Link>
            </form>
        </div>
    );
}
