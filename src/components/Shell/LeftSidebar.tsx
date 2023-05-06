import { Navbar as MNavbar, Title } from "@mantine/core";

function LeftSidebar() {
    return (
        <MNavbar width={{ sm: 300 }} p="md">
            <Title align="center" order={3} mb="md">
                Elements
            </Title>
        </MNavbar>
    );
}

export default LeftSidebar;
