import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#1b2924"
            },
            secondary: {
                main: "#275c49"
            },
            error: {
                main: "#e27252"
            },
            background: {
                default: "#f5f5ef",
                paper: "#faf8f3"
            },
            text: {
                primary: "#1b2924",
                secondary: "#59655e"
            }
        },
        typography: {
            fontFamily: '"DM Sans", sans-serif',
            h1: {
                fontFamily: '"Fraunces", Georgia, serif',
                fontWeight: 500,
                lineHeight: 1.04
            },
            h2: {
                fontFamily: '"Fraunces", Georgia, serif',
                fontWeight: 500,
                lineHeight: 1.1
            },
            h3: {
                fontFamily: '"Fraunces", Georgia, serif',
                fontWeight: 500
            },
            button: {
                fontWeight: 700
            }
        },
        shape: {
            borderRadius: 18
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true
                },
                styleOverrides: {
                    root: {
                        borderRadius: 999,
                        textTransform: "none",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        padding: "0.8rem 1.2rem"
                    },
                    containedPrimary: {
                        backgroundColor: "#1b2924",
                        "&:hover": {
                            backgroundColor: "#275c49"
                        }
                    }
                }
            },
            MuiLink: {
                defaultProps: {
                    underline: "none"
                },
                styleOverrides: {
                    root: {
                        color: "inherit"
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: "rgba(245, 245, 239, 0.8)",
                        backdropFilter: "blur(14px)",
                        boxShadow: "none",
                        borderBottom: "1px solid rgba(27, 41, 36, 0.1)"
                    }
                }
            }
        }
    })
);
