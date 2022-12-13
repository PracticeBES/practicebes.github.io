import React from "react";
import Card from "../../UI/card/Card";
import CardContent from "../../UI/cardContent/CardContent";
import CardList from "./components/cardList/CardList";
import Header from "../../UI/header/Header";
import Main from "./components/main/Main";

const MainPage = ({ arrayFiles, arrayContent }) => {
    return (
        <Main>
            <Header />
            <CardList>
                <CardContent
                    header={"Отчет по практике"}
                    descr={[
                        "log Вне зависимости от выбранного заведения каждый студент должен пройти практику.",
                        "За весь период обучения их обычно несколько. А именно речь идет об:",
                        "svgУчебной;",
                        "svgПроизводственной;",
                        "svgТехнологической;",
                        "svgПреддипломной практиках.",
                        "itaЧтобы успешно завершить их, нужно будет вести дневники. Кроме того, руководитель потребует от обучающегося отчет по практике. Это некий итог, от которого будет зависеть оценка, проставляемая в диплом. Его содержание должно отвечать заявленной цели и отражать ход проведения практической деятельности.",
                    ]}
                />
                <CardContent
                    header={"Как писать отчет по практике"}
                    descr={[
                        "log Оформление отчета должно соответствовать предъявляемым к нему требованиям. Правила устанавливает само учреждение, а также ФГОС и ГОСТ.",
                        "itaПринята работа будет только в том случае, если требования соблюдены. Также должны выполняться специфические правила к написанию научной работы.",
                    ]}
                />
                <CardContent
                    header={"Титульный лист отчета по практике"}
                    descr={[
                        "log В каждом отчете должен присутствовать титульный лист. Согласно ГОСТ в нем должна отображаться информация об обучающемся.",
                        "itaОбязательно указывается организация или учебное заведение, где проводится практика. Должно быть отмечено и место, где реализуется деятельность.",
                    ]}
                />
                <CardContent
                    header={"Введение для отчета по практике"}
                    descr={[
                        "log В такой части работы как введение указываются основная цель и задачи. Их ставит перед собой обучающийся.",
                        "itaРассмотрению подлежат и методы, при помощи которых будут достигнуты задачи.",
                    ]}
                />
                <CardContent
                    header={"Заключение для отчета по практике"}
                    descr={[
                        "log Такая часть отчета как заключение не должна идти вразрез с введением.",
                        "itaОна должна отвечать поставленным перед обучающимся задачам, быть итогом проделанной работы.",
                    ]}
                />
                <CardContent
                    header={"Характеристика на студента для отчета по практике"}
                    descr={[
                        "log Одной из составляющих отчета является характеристика на ученика. Ее пишут сами руководители.",
                        "itaВ ней отмечаются профессиональные и личные качества практиканта.",
                        "itaРуководители указывают, готов ли студент к осуществлению трудовой деятельности, с какой стороны он показал себя, сложно ли ему было справляться с поставленными задачами.",
                        "itaОценивается общий уровень подготовки ученика, насколько качественно он выполнял работу, на какую отметку ее можно оценить.",
                    ]}
                />
                <CardContent
                    header={"Дневник отчета по практике"}
                    descr={[
                        "log Чтобы получить допуск к защите отчета, вне зависимости от темы, необходимо вести дневник по практике. Он отображает план работ, составленный индивидуально.",
                        "Как правило, образовательное учреждение выдает специальный бланк. Но в ряде случаев разрешается ведение стандартной тетради, оформленной согласно правилам ВУЗа.",
                        "Единая форма дневника законодательством не утверждена. Но есть некоторые стандарты, которые придется соблюдать.",
                        "На обложке должна присутствовать такая информация:",
                        "svgвид практики (преддипломная, учебная, производственная и т.п.);",
                        "svgнаименование учреждения, кафедры, факультета, специальность;",
                        "svgназвание организации, где проводилась практика (структурного подразделения, за которым закреплен ученик).",
                        "Основная часть дневника по специальностям отображает (как правило в виде таблицы) такие данные:",
                        "svgдата посещения организации;",
                        "svgв каком отделе происходила работа;",
                        "svgкакие были даны задания;",
                        "svgкак они были выполнены;",
                        "svgотметка от руководителя о выполнении практики (подпись руководителя).",
                    ]}
                />

                <CardContent
                    header={"Оформление отчета по практике"}
                    descr={[
                        "log Правильное оформление студенческого отчета по практике значит многое.",
                        "Студенческий практический отчет позволяет учащемуся высшего учебного заведения непосредственно оценить свой уровень подготовки.",
                        "Чтобы она была оценена по достоинству, работу необходимо писать не только грамотно и содержательно, но и оформлять в соответствии с требованиями ГОСТа.",
                        "Все правила оформления практических отчетов можно узнать из книжки методических рекомендаций.",
                        "Если таковой нет, можно обратиться к нормативно-правовым документам, выложенным в интернете на официальных сайтах.",
                        "Если оформление по ГОСТу студенческого отчета по дисциплинам по практике заняло слишком много времени, а сроки его сдачи уже поджимают, можно поступить мудро: скачать актуальные в текущем году работы и посмотреть их оформление.",
                        "Тогда будет понятно, как написать отчет. Но важно сохранять внимательность — эти работы сами должны подходить под последние требования.",
                        "Порядок оформления практического отчета выглядит так. Около 35-40 листов должны входить в студенческую практическую работу.",
                        "За редкими исключениями в работу можно включить и до 45 страниц. Предисловие занимает 2-3 листа. Нельзя разбивать отчет более чем на четыре раздела.",
                        "Требования ГОСТ определяют следующий порядок оформления:",
                        "svgтитульный лист;",
                        "svgпорядок выполнения научной работы;",
                        "svgкомментарий руководителя;",
                        "svgаннотация;",
                        "svgсписок условных обозначений и сокращений;",
                        "svgсодержание и предисловие;",
                        "svgосновной текст отчета;",
                        "svgвывод;",
                        "svgупоминаемая литература;",
                        "svgдополнительные материалы и приложения.",
                        "Если необходимо, приложения могут быть добавляться в отчет постепенно. На самой первой странице размещается титульный лист.",
                        "После титульного листа идет полный план практической работы. Затем размещается комментарий научного руководителя. После него пишут аннотацию к отчету.",
                        "В аннотации размещается краткое описание работы и выделяется её особая необходимость для данного времени.",
                        "Во введении должны быть указаны обстоятельства практики: то есть дата, местоположение проведения практики и её протяженность по времени.",
                        "Помимо, необходимо описать те виды работ которые были выполнены.",
                        "Требования оформления отчета выделяются такие:",
                        "svgпри выполнении норм по ГОСТу, соблюдается строгая, определённая форма текста, специальный подбор шрифта и его размера, грамотное оформление списка упоминаемой литературы и определенное расположение любой графики в работе.",
                        "Текст отчета пишется одним из трех возможных вариантов:",
                        "svgна персональном компьютере по ГОСТу 2.004;",
                        "svgпри помощи пишущей машинки;",
                        "svgчертежным шрифтом от руки по ГОСТу 2.304.",
                        "Для тех кто выполняет отчет на ПК и печатает работу на принтере, выполнять её нужно в программе Microsoft Word либо любой подобной программе. Распечатка идет в А4 формате.",
                        "Базовый текст выполняется стандартным шинглом 14. Размер заголовков основных разделов устанавливается на шингле 16, а размер заголовков подразделов должен соответствовать размеру среднего шрифта базового текста.",
                        "Весь текст должен быть выделен полужирным, а между строчками сделан одинарный интервал. При этом используют шрифт Times New Roman.",
                        "В ГОСТе 2.105-79, а также ГОСТе 7.32-2001 написано об этом подробнее. Работу разбивают на отдельные разделы и подразделы.",
                        "Если есть необходимость, в отчет добавляют пункты и списки. Каждый раздел начинается с начала нового отдельного листка.",
                        "Нумерация разделов производится при помощи арабских цифр в очередном порядке.",
                        "Наименование каждого раздела центрируется и оформляется шрифтом Times New Roman с шинглом 16 пунктов с полужирным выделением.",
                        "Все названия подразделов также нумеруют арабскими цифрами.",
                        "Названия основных разделов пишутся прописью, в то время как подразделы пишутся заглавной строчными буквами.",
                        "Названия подразделов пишутся с красной строчки и выравниваются с левой стороны.",
                        "Подразделы оформляются полужирным шрифтом размером 14 пунктов.",
                        "Делать перенос слов нельзя по ГОСТу, поэтому названия разделов необходимо писать как можно короче.",
                        "То же самое с названиями подразделов. Посередине заголовков раздела и подраздела делается расстояние в 8 мм.",
                        "Работа выполняется на листах А4 формата. Любые лишние элементы должны быть строго исключены, включая рамку и похожее.",
                        "Отступ слева должен иметь размер 30мм, отступ справа делается в размере 10мм, сверху выделяется пространство в 15мм, а внизу — 20мм.",
                        "Каждая из страниц должна быть пронумерована от титульного листа. Начало нумерации на титульном листе не отмечают.",
                        "В любую практическую работу часто вставляются различную графику или формулы и настраиваемые таблички.",
                        "Правила ГОСТа подразумевают размещение графики:",
                        "svgпод абзацем в котором упомянут данный элемент графики;",
                        "svgна последующем листе;",
                        "svgв приложениях и дополнениях.",
                        "Самый первый пункт наиболее популярен, потому что позволяет сразу видеть в отчете важную графическую информацию в совокупности с текстом.",
                        "Это так же хорошо защищает от потери данных. Формулы центрируются добавляются в те места, где были упомянуты.",
                        "Equation Editor является специальным редактором для формул.",
                        "Он позволяет непосредственно вставлять формулы в отчеты. Формула должна быть выполнена шрифтом с шинглом 14.",
                    ]}
                />
                <CardContent
                    header={"Требования к форме изложения текста отчета"}
                    descr={[
                        "log Часть символов являются строго запрещенными для упоминания в практической работе:",
                        "svgсимвол диаметра (пишется прописью);",
                        "svgсимвол минуса при упоминании отрицательной температуры так же пишется прописью;",
                        "svgлюбые стандартные индексы если нет специального номера регистрации;",
                        "svgлюбые математические символы при отсутствии чисел (например «<», «>» и «=»).",
                        "Практический отчет может иметь свой порядок сокращений либо наименований, если есть специальный раздел с расшифровками.",
                        "itaПри помощи любого текстового редактора можно существенно облегчить себе жизнь.",
                        "Основная часть дневника по специальностям отображает (как правило в виде таблицы) такие данные:",
                        "svgдата посещения организации;",
                        "svgв каком отделе происходила работа;",
                        "svgкакие были даны задания;",
                        "svgкак они были выполнены;",
                        "svgотметка от руководителя о выполнении практики (подпись руководителя).",
                    ]}
                />
                <CardContent
                    header={"Содержание отчета по практике"}
                    descr={[
                        "log Отчет сам по себе напоминает диплом или реферат. В нем обязательно должны присутствовать такие пункты:",
                        "svgвведение;",
                        "svgосновная часть;",
                        "svgзаключение;",
                        "svgсписок литературы.",
                    ]}
                />
                <CardContent
                    header={"Темы отчета по практике"}
                    descr={[
                        "log Темы для отчета, как правило, выбирает руководитель.",
                        "Они обязательно должны быть интересными и актуальными.",
                        "В некоторых случаях разрешено предложить свою тему, но утвердит или нет ее все равно руководитель.",
                    ]}
                />
                <CardContent
                    header={
                        "Список используемой литературы для отчета по практике (16 примеров)"
                    }
                    descr={[
                        "log В списке литературы находятся источники, которые были использованы в процессе написания работы, включая ссылки.",
                        "Составление списка должно происходить согласно ГОСТ или методичке.",
                        "itaВ списке могут находиться названия документов, которые выдало предприятие, источники из интернета, нормативная литература.",
                    ]}
                />

                {/* <Card
                    header={"Учебная практика"}
                    arrayFiles={[arrayFiles[0], arrayFiles[1], arrayFiles[4]]}
                />
                <Card
                    header={"Производственная практика"}
                    arrayFiles={[
                        arrayFiles[0],
                        arrayFiles[1],
                        arrayFiles[2],
                        arrayFiles[3],
                    ]}
                /> */}
            </CardList>
        </Main>
    );
};

export default MainPage;