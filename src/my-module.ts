import { Dependency } from './dependency';

export class MyModule {
    constructor(private dependency: Dependency) { }
    public hello(): void {
        this.dependency.run();
    }
}