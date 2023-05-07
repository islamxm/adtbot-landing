import styles from './HomeFaq.module.scss';
import Container from '@/components/Container/Container';
import Item from './components/Item/Item';
import { faqItemPropsType } from './types';
import {FC, useState, useEffect} from 'react';

const list = [
    {
        id: 1,
        head: 'Сколько можно зарабатывать?',
        body: <>
            <p>Сумма вашего заработка зависит от депозита и того, когда вы выйдете с монеты. Можем лишь сказать, что в среднем на анонсах цена повышается на 15-120% в первые минуты в зависимости от биржи, где происходит анонс, биржи, на которой монета торгуется, и самой монеты.</p>
        </>
    },
    {
        id: 2,
        head: 'Мой баланс в безопасности?',
        body: <>
            <p>
            ADTBot не имеет доступа к вашему биржевому счету. Вы только подключаете бота по API к серверам биржи, чтобы он мог получать данные и осуществлять на ней соответствующие действия.
            </p>
        </>
    },
    {
        id: 3,
        head: 'На какое количество анонсов листингов в месяц можно рассчитывать?',
        body: <>
            <p>
            Зависит от количества подключенных вами для мониторинга бирж. В среднем это 8-16 анонсов листингов в месяц.
            </p>
        </>
    },
    {
        id: 4,
        head: 'Не куплю ли я на хаях?',
        body: <>
            <p>
            Если вы посмотрите на бектесте, памп происходит в минутах. Мы же покупаем в первую секунду (или даже быстрее) после анонса листинга. Поэтому, вы точно нальетесь раньше остальных.
            </p>
        </>
    },
    {
        id: 5,
        head: 'Как я узнаю о действиях бота?',
        body: <>
            <p>
            Все действия бота пушатся в телеграм-бот и на вашу почту. Также вся информация доступна на платформе.
            </p>
        </>
    },
    {
        id: 6,
        head: 'Что, если пампа не произошло?',
        body: <>
            <p>
            По нашим наблюдениям, после анонса цена однозначно вырастает. Если вам будет не достаточно этой дельты, вы в любой момент можете стопнуть бота и продать все монеты в рынок. Также у вас есть возможность установить SL.
            </p>
        </>
    },
    {
        id: 7,
        head: 'Что, если не хватило ликвидности?',
        body: <>
            <p>
            Мы предусмотрели это. Вы устанавливаете максимальный процент проскальзывания, при котором бот прекращает закупку на выделенный вами депозит. Также вы можете установить минимальный суточный объем монеты до анонса.
            </p>
        </>
    },
    {
        id: 8,
        head: 'Каким депом можно входить?',
        body: <>
            <p>
            На начальных этапах и пока не соберете личную статистику, не рекомендуем больше 100-1000.
            </p>
        </>
    },
    {
        id: 9,
        head: 'Как я могу остановить бота?',
        body: <>
            <p>
            Бот остановится автоматически, если вами установлен TP. Также в любой момент вы можете его стопнуть, тем самым продать все монеты в рынок.
            </p>
        </>
    },
    {
        id: 10,
        head: 'Сколько ботов можно создавать в одном аккаунте?',
        body: <>
            <p>
            Количество ботов неограниченно.
            </p>
        </>
    },
    {
        id: 11,
        head: 'Как происходит оплата?',
        body: <>
            <p>
            Оплата производится на наш кошелек USDT из интерфейса платформы. После ввода хеша и подтверждения в сети, ваш тариф продлевается согласно сумме внесенных вами средств.
            </p>
        </>
    }
]

const HomeFaq = () => {
    const [activeId, setActiveId] = useState<number>(0)

    useEffect(() => {
        console.log(activeId)
    }, [activeId])
    

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h2 className={styles.title}>Часто задаваемые вопросы</h2>
                    <div className={styles.body}>
                        {
                            list?.map((item, index) => (
                                <Item 
                                    {...item}
                                    activeId={activeId}
                                    setActiveId={setActiveId}
                                    isActive={item.id === activeId} 
                                    key={item.id}/>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeFaq;