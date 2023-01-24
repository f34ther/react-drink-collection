import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseBase, chooseAmountOfBase, chooseMixer, chooseAmountOfMixer, chooseBlend } from '../Redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../Api';


interface DrinkFormProps {
    id?: string;
    data?: string;
};

interface DrinkState {
    base: string;
    amount_of_base: string;
    mixer: string;
    amount_of_mixer: string;
    blend: string;
};


export const DrinkForm = (props: DrinkFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<DrinkState>(state => state.base);
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)
        if (props.id!) {
            server_calls.update(props.id!, data);
            console.log(`Updated ${data} ${props.id}`);
            console.log(data);
            setTimeout(() => { window.location.reload() }, 1000);
            event.target.reset();
        } else {
            dispatch(chooseBase(data.base));
            dispatch(chooseAmountOfBase(data.amount_of_base));
            dispatch(chooseMixer(data.mixer));
            dispatch(chooseAmountOfMixer(data.amount_of_mixer));
            dispatch(chooseBlend(data.blend));
            server_calls.create(store.getState());
            setTimeout(() => { window.location.reload() }, 1000)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="base" > Base </label>
                    < Input {...register('base')} name="base" placeholder='Base' />
                </div>
                < div >
                    <label htmlFor="amount_of_base" > Amount Of Base </label>
                    < Input {...register('amount_of_base')} name="amount_of_base" placeholder='Amount of Base' />
                </div>
                < div >
                    <label htmlFor="Mixer" > Mixer </label>
                    < Input {...register('Mixer')} name="mixer" placeholder='Mixer' />
                </div>
                < div >
                    <label htmlFor="amount_of_mixer" > Amount of Mixer </label>
                    < Input {...register('amount_of_mixer')} name="amount_of_mixer" placeholder='Amount of Mixer' />
                </div>
                < div >
                    <label htmlFor="blend" > Blend </label>
                    < Input {...register('blend')} name="blend" placeholder='Blend' />
                </div>
                <Button type='submit'>Submit</Button>

            </form>
        </div>
    )
}