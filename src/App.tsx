import { Notification } from "./components/Notification";
import { Rocket } from "lucide-react";

export function App() {
  return (
    <div className="w-[448px] h-auto rounded bg-zinc-800 m-auto">
      <div className="w-full bg-zinc-800 py-4 px-4 flex justify-between">
        <h1 className="text-white">
          Notificações
        </h1>
        <span className="text-violet-500">
          Marcar todas como vistas
        </span>
      </div>
      <div className="w-full py-2 bg-zinc-950 px-4">
        <span className="text-zinc-400 text-sm">
          Recentes
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você foi convidado para fazer parte de uma empresa chamada SmadCode." />
          <Notification.Actions />
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você foi convidado para fazer parte de uma empresa chamada SmadCode." />
          <Notification.Actions />
        </Notification.Root>
      </div>
      <div className="w-full py-2 bg-zinc-950 px-4">
        <span className="text-zinc-400 text-sm">
          Antigas
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você foi convidado para fazer parte de uma empresa chamada SmadCode" />
          <Notification.Actions />
        </Notification.Root>

        <Notification.Root>
          <Notification.Content text="Você foi convidado para fazer parte de uma empresa chamada SmadCode" />
          <Notification.Actions />
        </Notification.Root>
      </div>
    </div>
  )
}

