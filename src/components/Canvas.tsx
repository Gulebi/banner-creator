import { Center } from "@mantine/core";
import { Stage, Layer } from "react-konva";
import { useState, useEffect } from "react";
import Konva from "konva";
import { ICanvasElement } from "../types";
import { CanvasAvatar, CanvasProgressBar, CanvasText } from ".";

function Canvas() {
    const [elements, setElements] = useState<ICanvasElement[]>([]);
    const [selected, setSelected] = useState<string | null>(null);

    const onDeselectShape = (e: Konva.KonvaEventObject<MouseEvent>): void => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelected(null);
        }
    };

    const X = 0.6;

    useEffect(() => {
        setElements((s) => [
            ...s,
            {
                id: "ff",
                type: "avatar",
                baseInfo: {
                    x: 72 + 234 / 2,
                    y: 63 + 234 / 2,
                    width: 234,
                    height: 234,
                },
            },
            {
                id: "gg",
                type: "progress",
                baseInfo: {
                    x: 347,
                    y: 262,
                    width: 661,
                    height: 50,
                },
            },
        ]);
    }, []);

    return (
        <Center>
            <Stage
                scale={{ x: X, y: X }}
                width={1080 * X}
                height={360 * X}
                onMouseDown={onDeselectShape}
                style={{
                    borderWidth: 15 * X,
                    borderStyle: "solid",
                    borderColor: "#001D3D",
                    backgroundColor: "#003566",
                }}
            >
                <Layer>
                    {elements.map((el) => {
                        switch (el.type) {
                            case "avatar":
                                return <CanvasAvatar key={el.id} data={el} isSelected={selected === el.id} />;
                            case "text":
                                return <CanvasText key={el.id} data={el} isSelected={selected === el.id} />;
                            case "progress":
                                return <CanvasProgressBar key={el.id} data={el} isSelected={selected === el.id} />;
                            default:
                                return null;
                        }
                    })}
                </Layer>
            </Stage>
        </Center>
    );
}

export default Canvas;
