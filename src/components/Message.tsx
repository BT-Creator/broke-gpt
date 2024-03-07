import { Avatar, Flex} from "@mantine/core";
import { PropsWithChildren } from "react";

interface MessageProps {
    userGenerated: boolean;
}

export default function Message({userGenerated, children}:PropsWithChildren<MessageProps>){
    return(
        <Flex direction={(userGenerated) ? "row" : "row-reverse"} wrap="nowrap" align="center">
            <Avatar/>
            {children}
        </Flex>
    )
}