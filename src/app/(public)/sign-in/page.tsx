import { AlertCircle, CheckCircle, Clipboard, Shield } from "lucide-react";
import {
  HighlightContent,
  HighlightDescription,
  HighlightIcon,
  HighlightTitle,
  HightlightRoot,
} from "./components/highlight";
import { SignInForm } from "./components/sign-in-form";

export default function SignInPage() {
  return (
    <div className="flex h-full">
      <div className="bg-muted dark:bg-background grid size-full place-items-center">
        <div className="space-y-6 flex flex-col items-center justify-center">
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-semibold">
              Bem vindo de volta!
            </h1>
            <p className="text-muted-foreground">
              Entre com suas credenciais para acessar o sistema
            </p>
          </div>

          <SignInForm />
        </div>
      </div>

      <div className="from-muted dark:from-background to-primary/25 hidden size-full flex-col justify-center gap-8 bg-gradient-to-r px-8 xl:flex">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="font-heading text-foreground text-3xl font-bold">
              PR - PROMOTORA DE CRÉDITO
            </h1>
            <p className="text-foreground">
              Plataforma integrada para gestão de crédito FGTS
            </p>
          </div>

          <p className="text-muted-foreground max-w-[600px]">
            Um sistema completo para gerenciar seus clientes, empréstimos e
            acompanhar todo o processo de contratação, desde a simulação até a
            liberação do valor.
          </p>
        </div>

        <div className="grid max-w-[600px] grid-cols-2 gap-2">
          <HightlightRoot>
            <HighlightIcon>
              <CheckCircle size={22} />
            </HighlightIcon>
            <HighlightContent>
              <HighlightTitle>Gestão de Clientes</HighlightTitle>
              <HighlightDescription>
                Controle completo da sua carteira
              </HighlightDescription>
            </HighlightContent>
          </HightlightRoot>

          <HightlightRoot>
            <HighlightIcon>
              <Shield size={22} />
            </HighlightIcon>
            <HighlightContent>
              <HighlightTitle>Segurança</HighlightTitle>
              <HighlightDescription>
                Dados protegidos e criptografados
              </HighlightDescription>
            </HighlightContent>
          </HightlightRoot>

          <HightlightRoot>
            <HighlightIcon>
              <AlertCircle size={22} />
            </HighlightIcon>
            <HighlightContent>
              <HighlightTitle>Simulação FGTS</HighlightTitle>
              <HighlightDescription>
                Comparação entre bancos
              </HighlightDescription>
            </HighlightContent>
          </HightlightRoot>

          <HightlightRoot>
            <HighlightIcon>
              <Clipboard size={22} />
            </HighlightIcon>
            <HighlightContent>
              <HighlightTitle>Contratos</HighlightTitle>
              <HighlightDescription>
                Gestão de todo o ciclo de vida
              </HighlightDescription>
            </HighlightContent>
          </HightlightRoot>
        </div>
      </div>
    </div>
  );
}
