'use client';

import axios from "axios";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'
import userRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from 'react-hot-toast';
import Button from "../Button";
import { IoLogoApple, IoLogoGithub, } from "react-icons/io";
import userLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const router = useRouter();
    const registerModal = userRegisterModal();
    const loginModal = userLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
            defaultValues: {
                email: '',
                password: ''
            }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false);
            if (callback?.ok) {
                toast.success('Logged In');
                router.refresh();
                loginModal.onClose();
            }
            if(callback?.error) {
                toast.error(callback.error);
            }
        })
    }

    const bodyContent =(
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome back!"
                subtitle="Login to your account!"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr></hr>
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button
                outline
                label="Continue with GitHub"
                icon={IoLogoGithub}
                onClick={() => {}}
            />
            <div className="
                text-neutral-500
                text-center
                mt-4
                font-light"
            >
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={registerModal.onClose} className="
                        text-neutral-800
                        cursor-pointer
                        hover-underline"
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;