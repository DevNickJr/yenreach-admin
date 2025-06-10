export default function Auth ({ token }: { token: string }) {
    return  ({
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }  
    })
}