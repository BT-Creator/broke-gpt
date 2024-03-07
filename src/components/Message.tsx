import { Avatar, Flex} from "@mantine/core";
import { PropsWithChildren } from "react";
import { MdAccountCircle } from "react-icons/md";

interface MessageProps {
    userGenerated: boolean;
}

export default function Message({userGenerated, children}:PropsWithChildren<MessageProps>){
    return(
        <Flex 
            direction={(userGenerated) ? "row-reverse" : "row"} 
            wrap="nowrap" 
            align="center" 
            gap="md"
            p='lg'
            c="white"
            bg={(userGenerated) ? "#212121" : "#323232"}>
            <Avatar color="#1ec480" src={((userGenerated) ? undefined : "./vite.svg")}>
                {userGenerated && <MdAccountCircle size="1.5rem"/>}
            </Avatar>
            {children}
        </Flex>
    )
}