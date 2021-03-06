/// <reference path='fourslash.ts' />

////type MyType = [string, number];
////interface I { x: MyType; test(a: MyType): void; }
////class C implements I {}

verify.codeFix({
    description: "Implement interface 'I'",
    newFileContent:
`type MyType = [string, number];
interface I { x: MyType; test(a: MyType): void; }
class C implements I {
    x: MyType;
    test(a: MyType): void {
        throw new Error("Method not implemented.");
    }
}`,
});
