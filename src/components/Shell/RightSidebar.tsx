import { Aside as MAside, Button, Title } from "@mantine/core";
import { useState } from "react";

function RightSidebar() {
    const [isAvatarAdded, setIsAvatarAdded] = useState(false);

    return (
        <MAside width={{ sm: 300 }} p="md">
            <Title align="center" order={3} mb="md">
                Controls
            </Title>
            <Button onClick={() => setIsAvatarAdded((s) => !s)}>
                {!isAvatarAdded ? "Add Avatar" : "Remove Avatar"}
            </Button>
        </MAside>
    );
}
export default RightSidebar;
