import React from "react";
import Subtitle from "app/components/common/typografy/subtitle";
import { CodeBlock, dracula } from "react-code-blocks";
import {
    oneToOneExample1Part1,
    oneToOneExample1Part2,
    oneToOneExample2Part1,
    oneToOneExample2Part2
} from "./examples";
import Title from "app/components/common/typografy/title";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Text from "app/components/common/typografy/text";

const OneToOnePage = () => {
    return (
        <>
            <Title>One-to-One</Title>
            <Text>Один к одному</Text>
            <SmallTitle>Зачем</SmallTitle>
            <Text>
                - Разделение ондной сущности на болеее используемые и менее
                используемые данные. <br />
                (Разделение на нужные в текущий момент и не нужные в текущий
                момент данные для работы фронт-энд приложения; что необходимо и
                не нужно отобразить в интерфейсе)
            </Text>
            <Text>
                - Оптимизация чтения и обработки данных.
                <br />
                (Более либо менее изменяемые данные. Делим данные по частоте их
                изменения)
            </Text>
            <Text>
                - Оптимизация объема памяти, необходимого для работы приложения.
                <br />
                (Оптимизация хранения данных на фрони-энде)
            </Text>

            <Subtitle>Пример 1. Адрес пользователя</Subtitle>
            <SmallTitle>1. Денормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample1Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />

            <SmallTitle>2. Нормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample1Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />

            <Subtitle>Пример 2. Данные о фильме</Subtitle>
            <SmallTitle>1. Денормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample2Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>2. Нормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample2Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
        </>
    );
};

export default OneToOnePage;
