import { AppShell, Container, MantineProvider } from "@mantine/core";
import { RightSidebar, Header, LeftSidebar, Canvas } from "./components";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppShell
                header={<Header />}
                navbar={<LeftSidebar />}
                aside={<RightSidebar />}
                sx={{ backgroundColor: "#F5F5F5" }}
            >
                <Container size="lg" p="xl" sx={{ backgroundColor: "#FFFFFF" }}>
                    <Canvas />
                </Container>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
