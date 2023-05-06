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

    useEffect(() => {
        setElements((s) => [
            ...s,
            {
                id: "ff",
                type: "avatar",
                baseInfo: {
                    x: 100,
                    y: 100,
                    width: 200,
                    height: 200,
                },
            },
        ]);
    }, []);

    const X = 0.5;

    return (
        <Center>
            <Stage
                scale={{ x: X, y: X }}
                width={1080 * X}
                height={360 * X}
                onMouseDown={onDeselectShape}
                style={{ borderWidth: 1, borderStyle: "solid" }}
            >
                <Layer>
                    {elements.length !== 0 &&
                        elements.map((el) => {
                            console.log(el);

                            switch (el.type) {
                                case "avatar":
                                    return <CanvasAvatar key={el.id} data={el} isSelected={selected === el.id} />;
                                // case "text":
                                //     return <CanvasText key={el.id} data={el} isSelected={selected === el.id} />;
                                // case "progress":
                                //     return <CanvasProgressBar key={el.id} data={el} isSelected={selected === el.id} />;
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
