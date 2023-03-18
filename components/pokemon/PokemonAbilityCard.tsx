import React, { FC } from 'react'

import { Card, Grid, Text } from '@nextui-org/react'

import styles from '../../styles/PokemonAbilityCard.module.css'

interface Props {
    ability: any,
    ability_number: number
}

const PokemonAbilityCard: FC<Props> = ({ability, ability_number}) => {

    const {name, description} = ability;
    
    return (
        <Grid xs className={styles.ability_card}>
            <Card>
                <Card.Header className={styles.card_header}>
                    <Text>{ability_number}</Text>
                    <Text h3>{name}</Text>
                </Card.Header>

                <Card.Body className={styles.card_body}>
                    <Text>{description}</Text>
                </Card.Body>
            </Card>
        </Grid>
    )
}

export default PokemonAbilityCard