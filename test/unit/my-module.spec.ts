import {MyModule} from '../../src/my-module';
import {Dependency} from '../../src/dependency';
import * as sinon from 'sinon'

describe('My Module', ()=>{
    it('says hello', ()=>{
        let dependency = new Dependency();
        let sut = new MyModule(dependency);

        let dependencySpy = sinon.spy(dependency, "run");

        expect(dependencySpy.called).toBe(true);
    });
});