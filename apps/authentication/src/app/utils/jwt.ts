import { JwtPayload, sign, verify } from 'jsonwebtoken';

export function signToken() {
    return sign({
        id: 'userId'
    }, 'privateKey');
}

export function verifyToken(token): string | JwtPayload {
    return verify(token, 'privateKey')
}