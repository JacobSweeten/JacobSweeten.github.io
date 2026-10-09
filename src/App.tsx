import { useEffect, useState } from "react";
import { AppBar, Box, Button, Chip, CssBaseline, GlobalStyles, Link, Paper, Stack, Toolbar, Typography } from "@mui/material";

const pages = ["about", "projects", "contact"] as const;
type Page = (typeof pages)[number];

const projectDetails = [
    {
        number: "01",
        name: "Nintendo 64 Game Engine",
        category: "C / MIPS ASSEMBLY",
        description:
            "A home-built N64 engine exploring low-level graphics and hardware. It can write raw data to the frame buffer and swap buffers; asset packing and loading are next.",
        url: "https://github.com/JacobSweeten/N64-Build",
        linkLabel: "View repository"
    },
    {
        number: "02",
        name: "Fred Discord Bot",
        category: "NODE.JS",
        description: "A small Discord bot made for friends, with a swear jar, reaction commands, and an 8 Ball.",
        url: "https://github.com/JacobSweeten/tntech-csc-fun-discord-bot",
        linkLabel: "View repository"
    },
    {
        number: "03",
        name: "Home Lab",
        category: "PROXMOX / ANSIBLE",
        description: "A Proxmox server on a Dell PowerEdge R710, running isolated services and virtual machines managed with Ansible and SSH.",
        url: "",
        linkLabel: ""
    }
] as const;

function pageFromHash(): Page {
    const rawPage = window.location.hash.slice(1);
    return pages.includes(rawPage as Page) ? (rawPage as Page) : "about";
}

function Header({ page, navigate }: { page: Page; navigate: (nextPage: Page) => void }) {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{ minHeight: { xs: 72, md: 88 }, px: { xs: 0, md: 0 }, justifyContent: "space-between" }}>
                <Link
                    href="#about"
                    aria-label="Jacob Sweeten home"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate("about");
                        window.location.hash = "#about";
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "350px",
                        height: { xs: 34, md: 43 },
                        transition: "background-color 500ms ease",
                        "&:hover": { backgroundColor: "secondary.main" }
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            display: "block",
                            height: "auto",
                            fontFamily: "Franunces, Georgia, serif",
                            fontStyle: "bold",
                            transition: "background-color 500ms ease",
                            "&:hover": { color: "background.default" }
                        }}
                    >
                        Jacob Sweeten
                    </Typography>
                </Link>

                <Stack direction="row" spacing={{ xs: 1.5, md: 4 }} alignItems="center">
                    {pages.map((item) => (
                        <Button
                            key={item}
                            component="a"
                            href={`#${item}`}
                            aria-current={page === item ? "page" : undefined}
                            onClick={(event) => {
                                event.preventDefault();
                                navigate(item);
                                window.location.hash = `#${item}`;
                            }}
                            color="inherit"
                            sx={{
                                minWidth: 0,
                                px: 0,
                                py: 1,
                                color: page === item ? "text.primary" : "text.secondary",
                                position: "relative",
                                fontSize: { xs: "0.72rem", md: "0.8rem" },
                                textTransform: "capitalize",
                                "&::after":
                                    page === item
                                        ? {
                                              content: '""',
                                              position: "absolute",
                                              left: 0,
                                              right: 0,
                                              bottom: 2,
                                              height: 2,
                                              backgroundColor: "error.main"
                                          }
                                        : undefined
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

function About({ navigate }: { navigate: (nextPage: Page) => void }) {
    return (
        <Box
            component="main"
            sx={{
                flex: 1,
                animation: "fadeIn 420ms ease both",
                "@keyframes fadeIn": { "0%": { opacity: 0, transform: "translateY(9px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                sx={{
                    minHeight: { md: 590 },
                    px: { xs: 3, sm: 5, md: 6 },
                    py: { xs: 5, md: 7 },
                    borderBottom: "1px solid rgba(27, 41, 36, 0.12)",
                    backgroundColor: "rgba(255,255,255,0.74)"
                }}
            >
                <Box sx={{ flex: 1, maxWidth: 640 }}>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ color: "secondary.main", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12rem", textTransform: "uppercase" }}
                    >
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "error.main" }} />
                        <Typography component="p" variant="caption" sx={{ fontWeight: 700, color: "secondary.main", letterSpacing: "0.12rem" }}>
                            Cybersecurity / Systems
                        </Typography>
                    </Stack>

                    <Typography variant="h1" sx={{ mt: 3, mb: 2, fontSize: { xs: "2.9rem", md: "4.2rem", lg: "4.7rem" } }}>
                        Curious about what runs{" "}
                        <Box component="span" sx={{ color: "secondary.main", fontStyle: "italic", fontWeight: 500 }}>
                            beneath the surface.
                        </Box>
                    </Typography>

                    <Typography variant="body1" sx={{ maxWidth: 430, color: "text.secondary", fontSize: "1rem", lineHeight: 1.75 }}>
                        I&apos;m Jacob, a computer scientist drawn to the details that make technology work, and the ones that keep it secure.
                    </Typography>

                    <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mt: 4, flexWrap: "wrap" }}>
                        <Button
                            component="a"
                            href="#projects"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("projects");
                                window.location.hash = "#projects";
                            }}
                            variant="contained"
                            color="primary"
                            sx={{ fontSize: "0.76rem" }}
                        >
                            Explore my work{" "}
                            <Box component="span" aria-hidden="true" sx={{ ml: 1 }}>
                                →
                            </Box>
                        </Button>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                navigate("contact");
                                window.location.hash = "#contact";
                            }}
                            sx={{
                                fontWeight: 700,
                                color: "text.primary",
                                textDecoration: "underline",
                                textUnderlineOffset: "0.3rem",
                                textDecorationColor: "error.main",
                                cursor: "pointer"
                            }}
                        >
                            Get in touch
                        </Link>
                    </Stack>

                    <Typography variant="overline" sx={{ mt: 6, display: "block", color: "#7d877f", letterSpacing: "0.12rem", fontSize: "0.65rem" }}>
                        <Box component="span" sx={{ color: "error.main", fontWeight: 700, mr: 1.5 }}>
                            01
                        </Box>
                        ABOUT / JACOB SWEETEN
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: "relative",
                        width: { xs: "min(78%, 340px)", md: "min(100%, 350px)" },
                        mx: "auto",
                        p: "12px 12px 44px",
                        backgroundColor: "#e4e9df",
                        transform: "rotate(2deg)",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -13,
                            right: "31%",
                            width: 72,
                            height: 25,
                            backgroundColor: "rgba(226,114,82,0.73)",
                            transform: "rotate(-7deg)"
                        }
                    }}
                >
                    <Box
                        component="img"
                        src="/content/images/photo.jpg"
                        alt="Portrait of Jacob Sweeten"
                        sx={{ display: "block", width: "100%", height: { xs: 380, md: 408 }, objectFit: "cover", objectPosition: "center 22%" }}
                    />
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ position: "absolute", right: 14, bottom: 14, left: 14, color: "#536158", fontSize: "0.65rem" }}
                    >
                        <Typography variant="caption">Based in Virginia Beach</Typography>
                        <Typography variant="caption">Always learning</Typography>
                    </Stack>
                </Box>
            </Stack>

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 3, md: 8 }}
                sx={{ px: { xs: 3, sm: 5, md: 6 }, py: { xs: 5, md: 8 }, backgroundColor: "rgba(226, 233, 223, 0.9)" }}
            >
                <Box sx={{ flex: 1, maxWidth: 300 }}>
                    <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.12rem", fontSize: "0.64rem" }}>
                        01 / BACKGROUND
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: "2rem", md: "2.4rem" } }}>
                        Security-minded.
                        <br />
                        Curiosity-led.
                    </Typography>
                </Box>

                <Box sx={{ flex: 1.6 }}>
                    <Typography variant="body1" sx={{ maxWidth: 600, color: "text.secondary", lineHeight: 1.8, fontSize: "0.96rem" }}>
                        I have an M.S. in computer science focused on cybersecurity. I&apos;m especially interested in IT security and hardware
                        security: how systems are built, where they can fail, and how to make them more resilient.
                    </Typography>
                    <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
                        {["Photography", "Programming", "Gaming"].map((interest) => (
                            <Chip
                                key={interest}
                                label={interest}
                                sx={{
                                    bgcolor: "transparent",
                                    color: "secondary.main",
                                    borderRadius: 0,
                                    border: "none",
                                    px: 0,
                                    py: 0,
                                    fontWeight: 700,
                                    fontSize: "0.72rem",
                                    "&::before": { content: '"/"', color: "error.main", mr: 1 }
                                }}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

function Projects() {
    return (
        <Box
            component="main"
            sx={{
                flex: 1,
                animation: "fadeIn 420ms ease both",
                "@keyframes fadeIn": { "0%": { opacity: 0, transform: "translateY(9px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }
            }}
        >
            <Box sx={{ px: { xs: 3, sm: 5, md: 6 }, py: { xs: 5, md: 8 }, backgroundColor: "rgba(255,255,255,0.78)" }}>
                <Stack spacing={1.5} sx={{ maxWidth: 700, pb: 4 }}>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ color: "secondary.main", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12rem", textTransform: "uppercase" }}
                    >
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "error.main" }} />
                        <Typography component="p" variant="caption" sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.12rem" }}>
                            Selected work
                        </Typography>
                    </Stack>
                    <Typography variant="h1" sx={{ fontSize: { xs: "2.9rem", md: "4.1rem" } }}>
                        Projects{" "}
                        <Box component="span" sx={{ color: "secondary.main", fontStyle: "italic" }}>
                            & experiments.
                        </Box>
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.96rem" }}>
                        A few things I&apos;ve built, explored, and learned from along the way.
                    </Typography>
                </Stack>

                <Stack sx={{ borderTop: "1px solid rgba(27, 41, 36, 0.12)" }}>
                    {projectDetails.map((project) => (
                        <Paper
                            key={project.number}
                            elevation={0}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "32px 1fr", md: "54px minmax(0, 1fr) auto" },
                                alignItems: "start",
                                gap: { xs: 1.5, md: 3 },
                                borderRadius: 0,
                                borderBottom: "1px solid rgba(27, 41, 36, 0.12)",
                                minHeight: 184,
                                px: { xs: 1.5, md: 2 },
                                py: 3,
                                bgcolor: "transparent",
                                transition: "padding 180ms ease, background-color 180ms ease",
                                "&:hover": {
                                    bgcolor: "#f4f6f0"
                                }
                            }}
                        >
                            <Typography variant="overline" sx={{ pt: 0.5, color: "error.main", fontWeight: 700, letterSpacing: "0.08rem" }}>
                                {project.number}
                            </Typography>
                            <Box>
                                <Typography
                                    variant="overline"
                                    sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.1rem", fontSize: "0.58rem" }}
                                >
                                    {project.category}
                                </Typography>
                                <Typography variant="h3" sx={{ mt: 1, mb: 1.4, fontSize: { xs: "1.7rem", md: "2rem" } }}>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" sx={{ maxWidth: 670, color: "text.secondary", lineHeight: 1.7, fontSize: "0.9rem" }}>
                                    {project.description}
                                </Typography>
                            </Box>
                            {project.url && (
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        alignSelf: "center",
                                        color: "secondary.main",
                                        fontWeight: 700,
                                        fontSize: "0.72rem",
                                        whiteSpace: "nowrap",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 1.2
                                    }}
                                >
                                    {project.linkLabel}
                                    <Box component="span" aria-hidden="true">
                                        →
                                    </Box>
                                </Link>
                            )}
                        </Paper>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

function Contact() {
    return (
        <Box
            component="main"
            sx={{
                flex: 1,
                animation: "fadeIn 420ms ease both",
                "@keyframes fadeIn": { "0%": { opacity: 0, transform: "translateY(9px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }
            }}
        >
            <Box sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 6, md: 8 }, backgroundColor: "rgba(255,255,255,0.78)", minHeight: 630 }}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ color: "secondary.main", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12rem", textTransform: "uppercase" }}
                >
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "error.main" }} />
                    <Typography component="p" variant="caption" sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.12rem" }}>
                        Contact
                    </Typography>
                </Stack>

                <Typography variant="h1" sx={{ mt: 3, mb: 1.5, fontSize: { xs: "3rem", md: "5.5rem", lg: "6rem" }, lineHeight: 1.05 }}>
                    Have a good
                    <br />
                    <Box component="span" sx={{ color: "secondary.main", fontStyle: "italic" }}>
                        question?
                    </Box>
                </Typography>

                <Typography variant="body1" sx={{ maxWidth: 420, mb: 4, color: "text.secondary", lineHeight: 1.7 }}>
                    I&apos;d be glad to hear from you. Find me through any of these channels.
                </Typography>

                <Stack sx={{ maxWidth: 710, borderTop: "1px solid rgba(27, 41, 36, 0.12)" }}>
                    {[
                        { label: "Email", value: "mail@jacobsweeten.net", href: "mailto:mail@jacobsweeten.net" },
                        { label: "LinkedIn", value: "Jacob Sweeten", href: "https://www.linkedin.com/in/jacob-sweeten-473122182/" },
                        { label: "GitHub", value: "JacobSweeten", href: "https://github.com/JacobSweeten" }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            sx={{
                                minHeight: 68,
                                display: "grid",
                                gridTemplateColumns: { xs: "72px 1fr 18px", md: "110px 1fr 24px" },
                                alignItems: "center",
                                borderBottom: "1px solid rgba(27, 41, 36, 0.12)",
                                color: "text.primary",
                                "&:hover .contact-arrow": { transform: "translateX(4px)" }
                            }}
                        >
                            <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: "0.08rem" }}>
                                {item.label}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: "0.74rem", md: "0.9rem" } }}>
                                {item.value}
                            </Typography>
                            <Box
                                component="span"
                                className="contact-arrow"
                                aria-hidden="true"
                                sx={{ color: "secondary.main", transition: "transform 160ms ease" }}
                            >
                                →
                            </Box>
                        </Link>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

export default function App() {
    const [page, setPage] = useState<Page>(pageFromHash);

    useEffect(() => {
        const syncPage = () => setPage(pageFromHash());
        window.addEventListener("hashchange", syncPage);
        return () => window.removeEventListener("hashchange", syncPage);
    }, []);

    useEffect(() => {
        document.title = `${page.charAt(0).toUpperCase()}${page.slice(1)} | Jacob Sweeten`;
    }, [page]);

    return (
        <>
            <GlobalStyles
                styles={{
                    ":root": {
                        colorScheme: "light",
                        fontFamily: '"DM Sans", sans-serif'
                    },
                    html: { scrollBehavior: "smooth" },
                    body: {
                        margin: 0,
                        minWidth: 320,
                        minHeight: "100vh",
                        backgroundColor: "#f5f5ef",
                        backgroundImage: "radial-gradient(#a8b3a9 0.65px, transparent 0.65px)",
                        backgroundSize: "18px 18px"
                    },
                    "*, *::before, *::after": {
                        boxSizing: "border-box"
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                        html: { scrollBehavior: "auto" },
                        "*": { animationDuration: "0.01ms !important", transitionDuration: "0.01ms !important" }
                    }
                }}
            />
            <Box
                sx={{
                    width: "min(1160px, calc(100% - 64px))",
                    minHeight: "100vh",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    "@media (max-width: 760px)": { width: "min(100% - 36px, 600px)" },
                    "@media (max-width: 420px)": { width: "calc(100% - 28px)" }
                }}
            >
                <Header page={page} navigate={setPage} />
                {page === "about" && <About navigate={setPage} />}
                {page === "projects" && <Projects />}
                {page === "contact" && <Contact />}
                <Box
                    component="footer"
                    sx={{
                        minHeight: 68,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: { xs: 0, md: 0 },
                        color: "#758078",
                        fontSize: "0.64rem",
                        letterSpacing: "0.02em",
                        borderTop: "1px solid rgba(27,41,36,0.1)"
                    }}
                >
                    <Typography variant="caption">© {new Date().getFullYear()} Jacob Sweeten</Typography>
                    <Typography variant="caption">Built with curiosity in Virginia Beach</Typography>
                </Box>
            </Box>
        </>
    );
}
