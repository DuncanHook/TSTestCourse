import { Authorizer } from "../../../app/server_app/auth/Authorizer";
import { RegisterHandler } from "../../../app/server_app/handlers/RegisterHandler"
import { IncomingMessage, ServerResponse } from 'http'

const getRequestBodyMock = jest.fn();

jest.mock("../../../app/server_app/utils/Utils", () => {
    getRequestBody: () => getRequestBodyMock()
})


describe('RegisterHandler test suite', () => {

    let sut: RegisterHandler;

    const request = {
        method: undefined
    }

    const responseMock = {
        statusCode: 0,
        writeHead: jest.fn(),
        write: jest.fn(),
    }

    const authorizerMock = {
        registerUser: jest.fn(),
    }

    beforeEach(() => {
        sut = new RegisterHandler(
            request as any as IncomingMessage,
            responseMock as any as ServerResponse,
            authorizerMock as any as Authorizer
        );
    })

    afterEach(() => {
        jest.clearAllMocks();
    })



})