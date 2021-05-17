import React, { useCallback, useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Loading } from '../../../components/Loading';

import { Container, Content } from './styles';
import { getValidationErrors } from '../../../utils/getValidationErrors';
import { api } from '../../../services/api';

interface IDataNewsLetter {
  name: string;
  email: string;
}

const NewsLetter: React.FC = () => {
  const [isSentNewsLetter, setIsSentNewsLetter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (formData: IDataNewsLetter) => {
    try {
      setIsLoading(true);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Preencha com um e-mail válido'),
        name: Yup.string().required('Preencha com seu nome completo'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      const { name, email } = formData;

      const { status: statusCode } = await api.post('newsletter', {
        name,
        email,
      });

      setIsSentNewsLetter(statusCode === 200);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      {!isLoading ? (
        <Content>
          {isSentNewsLetter ? (
            <div className="sent-newsletter">
              <h4>Seu e-mail foi cadastrado com sucesso!</h4>
              <span>
                A partir de agora você receberá as novidade e ofertas
                exclusivas.
              </span>
              <Button
                width="200px"
                height="40px"
                onClick={() => setIsSentNewsLetter(false)}
              >
                Cadastrar novo e-mail
              </Button>
            </div>
          ) : (
            <>
              <h4>Participe de nossas news com promoções e novidades!</h4>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Digite seu nome" />
                <Input name="email" placeholder="Digite seu email" />
                <Button type="submit" height="100%">
                  Eu Quero!
                </Button>
              </Form>
            </>
          )}
        </Content>
      ) : (
        <Loading width="50px" height="50px" />
      )}
    </Container>
  );
};

export { NewsLetter };
