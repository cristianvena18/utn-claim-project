import {v4} from 'uuid';

class Visitor {
  private id: string;
  private ip: string;
  private nickname: string;
  private pin: string;

  private constructor(id: string, ip: string, nickname: string, pin: string) {
    this.id = id;
    this.ip = ip;
    this.nickname = nickname;
    this.pin = pin;
  }

  public getId(): string {
    return this.id;
  }

  public static create(ip: string, nickname: string, pin: string): Visitor {
    return new Visitor(v4(), ip, nickname, pin);

  }

  pinMatch(pin: string) {
    return this.pin === pin;
  }

  public getIp(): string {
    return this.ip;
  }

  public getNickname(): string {
    return this.nickname;
  }
}

export default Visitor;